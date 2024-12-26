// @ts-nocheck
"use client";

import {
    motion,
    useScroll,
    useTransform
} from "framer-motion";
import { useRef } from "react";
import { BuyButton } from "@/components/BuyButton";
import { ChipBanner } from "@/components/ChipBanner"
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"

export const HowToUse = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });
    const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [.3, 1]);

    return (
        <section id="how-to-use" className="relative overflow-hidden">
            <MaxWidthWrapper className="relative flex flex-col items-center py-20 md:py-32">
                {/* HowToUse Header */}
                <div className="flex flex-col justify-center items-center gap-4 max-w-xl mb-4 md:mb-6">
                    <ChipBanner text="GET READY FOR SUCCESS" />
                    <h2 className="flex-1 font-extrabold text-xl text-center md:text-3xl lg:text-5xl">
                        Prepare for Your Interview with Confidence
                    </h2>
                </div>
                <p className="flex-1 font-medium text-base text-center justify-center md:text-lg max-w-lg w-full">
                    Get ready for your next job interview with tailored mock tests, expert feedback, and valuable insights, all provided by InterviewMaster.ai.
                </p>

                {/* HowToUse Video */}
                <motion.article
                    ref={ref}
                    initial={{
                        filter: "blur(5px)",
                    }}
                    whileInView={{
                        filter: "blur(0px)",
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.25,
                    }}
                    style={{
                        opacity: opacity,
                        rotateX: rotateX,
                        transformPerspective: "800px",
                    }}
                    className="relative h-full w-full sm:w-10/12 md:w-8/12 p-0.5 my-12 overflow-hidden rounded-2xl">
                    
                    {/* TODO: Replace with a video showing InterviewMaster.ai features */}
                    <video
                        autoPlay
                        preload="metadata"
                        className="w-full h-full aspect-auto z-10"
                    >
                        <source src="/coming-soon-clip.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.article>

                {/* HowToUse CTA */}
                <BuyButton text="START PREPARING NOW" kit="Premium Plan" />

            </MaxWidthWrapper>
        </section>
    );
}

// Instructions
/*
This component serves a dual purpose:
1. Demonstrate how to use InterviewMaster.ai for interview preparation
2. Build trust by showcasing how easy it is to get started

Key Aspects:
1. Product Demonstration: Highlight how InterviewMaster.ai works, including mock tests, feedback, and analytics.
2. Personal Touch: Showcase the features that make InterviewMaster.ai the ideal platform for interview preparation.
3. Engagement: Use motion effects and dynamic design to captivate users and hold their interest.

Why Show Yourself:
- Builds trust by making the process personal and human
- Establishes connection and reassures users that they are in good hands
*/
