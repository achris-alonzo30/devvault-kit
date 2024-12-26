// @ts-nocheck
import Link from "next/link";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import { Trophy, ChevronRight } from "lucide-react";
import { ChipBanner } from "@/components/ChipBanner";
import { BuyButton } from "@/components/BuyButton";
import { CanvasCover } from "@/components/animation/CanvasCover";

export const LeftHero = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const containerVariants = {
        hidden: { y: 25, opacity: 0, filter: "blur(5px)" },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 1.25,
                delay: 0.25,
                ease: "easeInOut",
            }
        }
    }

    return (
        <div className="flex flex-col flex-1 w-full">
            <motion.aside
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
                    ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="flex relative mb-2 justify-center md:justify-start"
            >
                <ChipBanner text="YOUR PARTNER IN INTERVIEW SUCCESS" />
            </motion.aside>

            <motion.h1
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className="mb-3 mt-3 text-center md:text-start text-xl font-bold leading-tighter md:text-4xl sm:leading-tighter md:leading-tighter lg:leading-tighter"
            >
                <CanvasCover>Crack Your Interviews</CanvasCover> with {" "}
                AI-Driven Guidance
            </motion.h1>

            <motion.p
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
                    delay: 0.5,
                    ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="mb-4 max-w-2xl text-center md:text-start text-sm md:text-md text-foreground lg:text-lg"
            >
                Prepare for interviews with tailored mock questions, feedback, and insights using our{" "}
                <strong>AI-powered Interview Master.</strong>
            </motion.p>

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
                    delay: 0.75,
                    ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="flex my-4 items-center gap-10 justify-center md:justify-start"
            >
                <BuyButton text="START YOUR INTERVIEW PREP NOW" kit="Premium Access" />

                <Link href="/docs" className="group flex tracking-widest items-center gap-2 text-xs md:text-sm font-black text-foreground/80">
                    LEARN MORE
                    <ChevronRight className="size-4 group-hover:translate-x-2 transition-all duration-200 ease-in-out " />
                </Link>
            </motion.div>

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
                <Trophy className="text-[#fcba28]/80 size-4" />
                <p>Join the thousands of successful candidates who nailed their interviews!</p>
            </motion.div>
        </div>
    )
}
