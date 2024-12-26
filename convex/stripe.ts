"use node";

import Stripe from "stripe";
import { v } from "convex/values";
import { PRODUCT_TYPE } from "./schema";
import { internal } from "./_generated/api";
import { Id } from "./_generated/dataModel";
import { getAuthUserId } from "@convex-dev/auth/server";
import { action, internalAction } from "./_generated/server";


// Here's an example of using One-Time Payment
export const pay = action({
  args: {
    productType: PRODUCT_TYPE,
    email: v.optional(v.string()),
  },
  handler: async (ctx, { email, productType }) => {
    const userId = await getAuthUserId(ctx);

    if (userId === null) {
      throw new Error("You must be logged in to purchase");
    };

    // TODO: instead of this use get if the app is development or production mode
    const domain = process.env.HOSTING_URL ?? "https://interviewmasterai.vercel.app";
    const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
      apiVersion: "2024-11-20.acacia"
    });


    // Define prices (in cents, no decimals)
    const amount = productType === "Starter Kit" ? 9900 : 14900;
    const product = productType === "Starter Kit" ? process.env.PRODUCT_ID_STARTER_KIT! : process.env.PRODUCT_ID_PREMIUM_KIT!;

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            product,
            currency: "USD",
            unit_amount: amount,
            tax_behavior: "exclusive",
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      mode: "payment",
      success_url: `${domain}/thankyou`,
      cancel_url: `${domain}`,
      client_reference_id: userId,
      metadata: {
        userId,
        productType
        // TODO: you can add more metadata you needed that you want to store to grab for later
      }
    });

    return session.url;
  },
});

// Here's an example of a Subscription Payment 
// export const pay = action({
//   args: {
//     planType: v.union(v.literal("monthly"), v.literal("yearly")),
//     email: v.optional(v.string()),
//   },
//   handler: async (ctx, { email, planType }) => {
//     const userId = await getAuthUserId(ctx);

//     if (userId === null) {
//       throw new Error("You must be logged in to subscribe");
//     }

//     const domain = process.env.HOSTING_URL ?? "http://localhost:3000";
//     const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
//       apiVersion: "2024-09-30.acacia"
//     });

//     // Define prices (use your actual price IDs from Stripe)
//     const priceId = planType === "monthly" ? process.env.MONTHLY_PRICE_ID! : process.env.YEARLY_PRICE_ID!;

//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           price: priceId,
//           quantity: 1,
//         },
//       ],
//       mode: "subscription",
//       success_url: `${domain}/subscription-success`,
//       cancel_url: `${domain}/pricing`,
//       client_reference_id: userId,
//       customer_email: email,
//       metadata: {
//         userId,
//         planType,
//       }
//     });

//     return session.url;
//   },
// });

// Fulfilling for one time payment
export const fulfill = internalAction({
  args: { signature: v.string(), payload: v.string() },
  handler: async (ctx, { signature, payload }) => {
    const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
      apiVersion: "2024-11-20.acacia",
    });

    const webhookSecret = process.env.STRIPE_WEBHOOKS_SECRET!;
    try {
      const event = await stripe.webhooks.constructEventAsync(
        payload,
        signature,
        webhookSecret
      );

      // TODO: You can add more different types of event type here
      if (event.type === "checkout.session.completed") {
        // Extract all the metadata you need in the session
        const session = event.data.object as Stripe.Checkout.Session & {
          metadata: {
            userId: Id<"users">;
            productType: "Starter Kit" | "Premium Kit";
          }
        };

        // TODO: Check your schema on the payments the things you need in the metadata
        // grab amount
        const amount = session.amount_total! / 100;
        // grab payment_intent
        const stripePaymentIntentId = session.payment_intent as string;
        // grab the status
        const stripePaymentStatus = session.payment_status;
        // grab the product type
        const productType = session.metadata.productType;

        // grab the userId
        const userId = session.metadata.userId;

        // grab the date of purchased
        const dateOfPurchased = new Date();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const formattedDate = dateOfPurchased.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });

        // Call your internal mutation in here to update payments and users table
        if (amount && userId && productType && stripePaymentIntentId) {
          await ctx.scheduler.runAfter(5, internal.payments.createPayment, {
            amount,
            userId,
            productType,
            stripePaymentStatus,
            stripePaymentIntentId
          });

          await ctx.scheduler.runAfter(5, internal.users.updateUserAfterPurchase, {
            userId,
            productType,
          });
        
        // TODO: Uncomment this when you have activated your Resend account and grab your API key
        //   await ctx.scheduler.runAfter(3000, internal.emails.sendEmailAfterPurchase, {
        //     kit: productType,
        //     totalPrice: amount,
        //     dateOfPurchased: formattedDate,
        //     email: session.customer_email!,
        //     stripeId: stripePaymentIntentId,
        //   })
        }
      }
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, error: (err as { message: string }).message };
    }
  },
});

// // Here's an example of a subscription fulfill
// export const fulfill = internalAction({
//   args: { signature: v.string(), payload: v.string() },
//   handler: async (ctx, { signature, payload }) => {
//     // ... existing webhook setup ...

//     try {
//       const event = await stripe.webhooks.constructEventAsync(
//         payload,
//         signature,
//         webhookSecret
//       );

//       switch (event.type) {
//         case "checkout.session.completed":
//           // ... existing one-time payment logic ...
//           break;

//         case "customer.subscription.created":
//         case "customer.subscription.updated":
//           const subscription = event.data.object as Stripe.Subscription;
//           await handleSubscriptionChange(ctx, subscription);
//           break;

//         case "customer.subscription.deleted":
//           const canceledSubscription = event.data.object as Stripe.Subscription;
//           await handleSubscriptionCancellation(ctx, canceledSubscription);
//           break;
//       }

//       return { success: true };
//     } catch (err) {
//       console.error(err);
//       return { success: false, error: (err as { message: string }).message };
//     }
//   },
// });

// async function handleSubscriptionChange(ctx: any, subscription: Stripe.Subscription) {
//   const userId = subscription.metadata.userId as Id<"users">;
//   const planType = subscription.metadata.planType as "monthly" | "yearly";
//   const status = subscription.status;
//   const currentPeriodEnd = new Date(subscription.current_period_end * 1000);

//   await ctx.scheduler.runAfter(5, internal.users.updateUserSubscription, {
//     userId,
//     planType,
//     status,
//     currentPeriodEnd,
//     stripeSubscriptionId: subscription.id,
//   });
// }

// async function handleSubscriptionCancellation(ctx: any, subscription: Stripe.Subscription) {
//   const userId = subscription.metadata.userId as Id<"users">;

//   await ctx.scheduler.runAfter(5, internal.users.cancelUserSubscription, {
//     userId,
//     stripeSubscriptionId: subscription.id,
//   });
// }