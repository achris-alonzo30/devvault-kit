// @ts-nocheck
"use client";

import { z } from "zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubscribe } from "@/features/subscribe-for-waitlist/api/useSubscribe";
import { subscriptionSchema } from "@/features/subscribe-for-waitlist/lib/subscription.schema";

import { Gift } from "lucide-react";

import {
    Form,
    FormItem,
    FormField,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export const SubscriptionForm = ({ animated = false }: { animated: boolean }) => {
    const router = useRouter();
    const { mutate, isPending } = useSubscribe();

    const form = useForm<z.infer<typeof subscriptionSchema>>({
        resolver: zodResolver(subscriptionSchema),
        defaultValues: {
            email: ""
        }
    });

    const handleSubmit = (values: z.infer<typeof subscriptionSchema>) => {
        // TODO: check email is valid if not empty and using regex
        if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            return toast.error("Please enter a valid email address");
        }

        // TODO: call api
        mutate({
            email: values.email
        }, {
            onSuccess: (res) => {
                toast.success(res?.message);
                form.reset();
                router.push("/thankyou")
            },
            onError: () => {
                toast.error("Failed to subscribe");
            }
        })
    }

    if (animated) {
        return (
            <fieldset className="flex flex-col gap-4 items-center md:items-start justify-center md:justify-start w-full">
                <Form {...form}>
                    <motion.form
                        initial={{
                            y: 25,
                            opacity: 0,
                            filter: "blur(5px)"
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                            filter: "blur(0px)"
                        }}
                        transition={{
                            duration: 1.25,
                            delay: 0.75,
                            ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="flex items-center gap-2 justify-center md:justify-start w-full"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormItem>
                                        <Input
                                            {...field}
                                            required
                                            type="email"
                                            className="bg-background w-full"
                                            placeholder="Enter your email"
                                        />
                                    </FormItem>
                                </FormItem>
                            )}
                        />
                        <Button disabled={isPending} className="font-black tracking-widest text-xs md:text-sm w-fit px-8 py-2 bg-[#fcba28]/90 hover:bg-[#fcba28]/75 rounded-full text-background transition ">
                            {isPending ? "SUBSCRIBING..." : "SUBSCRIBE"}
                        </Button>
                    </motion.form>
                </Form>
                <motion.div
                    initial={{
                        y: 25,
                        opacity: 0,
                        filter: "blur(5px)"
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)"
                    }}
                    transition={{
                        duration: 1.25,
                        delay: 1,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    className="flex items-center gap-1 font-medium justify-center md:justify-start text-foreground/80 text-xs"
                >
                    <Gift className="text-[#fcba28]/80 hover:text-[#fcba28] size-4 hover:-rotate-1 transform duration-200 ease-linear" />
                    <p><strong>FIRST 10 SUBSCRIBERS</strong> get the DevVault landing page template. Grab your dibs on early access!</p>
                </motion.div>
            </fieldset>
        )
    } else {
        return (
            <fieldset className="flex flex-col gap-4 items-center md:items-start justify-center md:justify-start w-full">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="flex items-center gap-2 justify-center md:justify-start w-full"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormItem >
                                        <Input
                                            {...field}
                                            required
                                            type="email"
                                            className="bg-background w-full"
                                            placeholder="Enter your email"
                                        />
                                    </FormItem>
                                </FormItem>
                            )}
                        />
                        <Button disabled={isPending} className="font-black tracking-widest text-xs md:text-sm w-fit px-8 py-2 bg-[#fcba28]/90 hover:bg-[#fcba28]/75 rounded-full text-background transition ">
                            {isPending ? "SUBSCRIBING..." : "SUBSCRIBE"}
                        </Button>
                    </form>
                </Form>
                <div className="flex items-center gap-1 font-medium justify-center md:justify-start text-foreground/80 text-xs"
                >
                    <Gift className="text-[#fcba28]/80 hover:text-[#fcba28] size-4 hover:-rotate-1 transform duration-200 ease-linear" />
                    <p><strong>First 10 subscribers</strong> get the DevVault landing page template. Grab your dibs on early access!</p>
                </div>
            </fieldset>
        )
    }

}