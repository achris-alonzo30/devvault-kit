// @ts-nocheck
import { cn } from "@/lib/utils";
import { Check, Zap } from "lucide-react";
import { RiNotionFill } from "react-icons/ri";
import { BuyButton } from "@/components/BuyButton";
import { ChipBanner } from "@/components/ChipBanner";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";

// Updated package details
const packages = [
    {
        name: "Starter Kit",
        originalPrice: 149,
        price: 1.5,  // Discounted price for 90% off
        features: [
            "User-friendly interview scheduling system",
            "Automated interview feedback collection",
            "Integrated candidate management tools",
            "Real-time interview collaboration",
            "Basic analytics & reporting",
            "Basic Interview Templates",
            "Email notifications for interviews",
            "Document upload for candidates",
        ],
    },
    {
        name: "Premium Kit",
        originalPrice: 199,
        price: 19,  // Discounted price for 90% off
        popular: true,
        features: [
            { text: "Everything in Starter, PLUS:", icon: "Zap" },
            { text: "Advanced AI-powered interview feedback", icon: "Zap" },
            { text: "Comprehensive Interview Analytics", icon: "Zap" },
            { text: "Premium interview templates", icon: "Notion" },
            "Priority customer support",
            "Unlimited interview slots",
            "Future product updates",
            "Customizable candidate pipelines",
            "Integration with HR tools",
        ],
    },
    {
        name: "Enterprise Kit",
        originalPrice: 499,
        price: 49,  // Discounted price for 90% off
        popular: false,
        features: [
            { text: "Everything in Premium, PLUS:", icon: "Zap" },
            { text: "Dedicated account manager", icon: "Zap" },
            { text: "Onboarding and training sessions", icon: "Zap" },
            "Advanced custom reporting",
            "Single sign-on (SSO) integration",
            "Multi-user support with role-based access",
            "Priority bug fixes & support",
            "API access for automation",
        ],
    },
];

export const Pricing = () => {
    return (
        <section id="pricing" className="relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <MaxWidthWrapper className="flex flex-col items-center py-16 md:py-24">
                <div className="flex flex-col justify-center items-center gap-4 max-w-xl mb-4 md:mb-6">
                    <ChipBanner text="PRICING" />
                    <h2 className="flex-1 font-extrabold text-white text-center md:text-2xl lg:text-4xl">
                        Affordable Plans for Your Interview Mastery
                    </h2>
                </div>
                <p className="flex-1 font-medium text-sm text-center text-white md:text-base max-w-lg w-full">
                    Invest in your hiring success today with our flexible and powerful interview tools. Choose the plan that best suits your needs.
                </p>

                <article className="mt-12 grid max-w-lg grid-cols-1 gap-6 mx-auto lg:max-w-none lg:grid-cols-3">
                    {packages.map((pkg) => {
                        return (
                            <div
                                key={pkg.name}
                                className={cn(
                                    "relative flex flex-col justify-between rounded-3xl p-6 shadow-lg xl:p-8 transition-transform transform hover:scale-105 hover:shadow-2xl",
                                    pkg.popular
                                        ? "bg-gradient-to-r from-[#fcba28] to-[#f38ba3] text-white ring-4 ring-[#f38ba3]"
                                        : "bg-neutral-900 text-foreground"
                                )}
                            >
                                {pkg.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
                                        <p className="rounded-full uppercase font-semibold bg-[#f38ba3] px-3 py-1 text-xs text-primary shadow-md">
                                            Most Popular
                                        </p>
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-lg font-semibold leading-8 mb-3 text-white">{pkg.name}</h3>
                                    <div className="mt-4 flex items-baseline gap-x-2 mb-2">
                                        <span className="text-sm line-through opacity-50 text-gray-400">${pkg.originalPrice}</span>
                                        <span className="text-3xl font-black text-white">${pkg.price}</span>
                                        <span className="text-sm font-semibold text-white">USD</span>
                                    </div>
                                    <p className="text-sm leading-6 opacity-70 font-semibold text-white">
                                        ONE TIME PAYMENT
                                    </p>
                                    <ul role="list" className="mt-6 space-y-2 text-sm leading-6 text-white">
                                        {pkg.features.map((feature, index) => (
                                            <li key={index} className={cn("flex gap-x-3 font-medium", pkg.popular && "font-semibold")}>
                                                {typeof feature === 'string' ? (
                                                    <>
                                                        <Check className={cn("h-5 w-5 flex-none", pkg.popular ? "text-background" : "text-foreground")} aria-hidden="true" />
                                                        {feature}
                                                    </>
                                                ) : feature.icon === "Zap" ? (
                                                    <>
                                                        <Zap className={cn("h-5 w-5 flex-none animate-pulse font-bold", pkg.popular ? "text-[#fcba28]" : "text-foreground")} aria-hidden="true" />
                                                        {feature.text}
                                                    </>
                                                ) : feature.icon === "Notion" ? (
                                                    <>
                                                        <RiNotionFill className={cn("h-5 w-5 flex-none", pkg.popular ? "text-background" : "text-foreground")} aria-hidden="true" />
                                                        {feature.text}
                                                    </>
                                                ) : null}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-6 flex flex-col items-center">
                                    <BuyButton text="START MASTERING" kit={pkg.name as "Starter Kit" | "Premium Kit" | "Enterprise Kit"} />
                                    <p className="text-sm font-bold text-center text-white mt-2">
                                        Use on Unlimited Interview Sessions
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </article>
            </MaxWidthWrapper>
        </section>
    );
};
