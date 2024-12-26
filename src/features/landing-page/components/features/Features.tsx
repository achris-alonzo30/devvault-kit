"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { ChipBanner } from "@/components/ChipBanner";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";

// Lazy load feature components to optimize performance and user experience
const TowerBento = dynamic(() => import('./TowerBento').then(mod => ({ default: mod.TowerBento })), {
    loading: () => <div className="animate-pulse bg-neutral-900 h-full w-full rounded-lg min-h-[400px]" />,
    ssr: true,
});

const SquareBento1 = dynamic(() => import('./SquareBento1').then(mod => ({ default: mod.SquareBento1 })), {
    loading: () => <div className="animate-pulse bg-neutral-900 h-full w-full rounded-lg min-h-[200px]" />,
    ssr: true,
});

const SquareBento2 = dynamic(() => import('./SquareBento2').then(mod => ({ default: mod.SquareBento2 })), {
    loading: () => <div className="animate-pulse bg-neutral-900 h-full w-full rounded-lg min-h-[200px]" />,
    ssr: true,
});

const RectangularBento = dynamic(() => import('./RectangularBento').then(mod => ({ default: mod.RectangularBento })), {
    loading: () => <div className="animate-pulse bg-neutral-900 h-full w-full rounded-lg min-h-[200px]" />,
    ssr: true,
});

const Highlights = dynamic(() => import('./Highlights').then(mod => ({ default: mod.Highlights })), {
    loading: () => <div className="animate-pulse bg-neutral-900 h-20 w-full rounded-lg" />,
    ssr: true,
});

export const Features = () => {
    return (
        <section id="features" className="relative overflow-hidden">
            <MaxWidthWrapper className="relative flex flex-col items-center py-20 md:py-32">
                {/* Section Header */}
                <hgroup className="relative z-20 flex items-center flex-col md:flex-row flex-wrap justify-center md:justify-between w-full gap-6">
                    <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-4 max-w-xl">
                        <ChipBanner text="GET READY FOR YOUR NEXT INTERVIEW!" />
                        <h2 className="flex-1 font-extrabold text-xl text-center md:text-start md:text-2xl lg:text-3xl">
                            I spent <span className="text-[#fcba28]">1 WEEK</span> perfecting this interview prep platform, so you don&apos;t have to. Let me help you ace your interviews!
                        </h2>
                    </div>

                    <p className="flex-1 font-medium text-base text-center md:text-start md:text-lg justify-end max-w-lg w-full mt-0 md:mt-12">
                        With Interview Master, you&apos;ll have everything you need: practice questions, interview feedback, live mock interviews, and more. Focus on your interview success, not the prep.
                    </p>
                </hgroup>

                {/* Section Bento Grid */}
                <article className="grid grid-cols-1 gap-4 lg:grid-cols-12 my-10 md:my-20 border-b border-foreground/50 pb-10 md:pb-20">
                    {/* Main feature section */}
                    <Suspense fallback={<div className="animate-pulse bg-neutral-900 h-full w-full rounded-lg min-h-[400px]" />}>
                        <TowerBento />
                    </Suspense>

                    {/* Supporting feature columns */}
                    <div className="cols-span-1 grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-cols-2">
                        <Suspense fallback={<div className="animate-pulse bg-neutral-900 h-full w-full rounded-lg min-h-[200px]" />}>
                            <SquareBento1 />
                        </Suspense>
                        <Suspense fallback={<div className="animate-pulse bg-neutral-900 h-full w-full rounded-lg min-h-[200px]" />}>
                            <SquareBento2 />
                        </Suspense>
                        <Suspense fallback={<div className="animate-pulse bg-neutral-900 h-full w-full rounded-lg min-h-[200px]" />}>
                            <RectangularBento />
                        </Suspense>
                    </div>
                </article>

                {/* Section Highlights */}
                <Suspense fallback={<div className="animate-pulse bg-neutral-900 h-20 w-full rounded-lg" />}>
                    <Highlights />
                </Suspense>
            </MaxWidthWrapper>
        </section>
    );
}

/**
 * Features Component
 * 
 * This section highlights the key features of the Interview Master platform using
 * an interactive bento grid layout. Each feature is encapsulated in its own component 
 * and loaded lazily for improved performance and user experience.
 *
 * Layout Structure:
 * - TowerBento: Main feature showcase (4 columns)
 * - SquareBento1 & 2: Secondary features (2 columns each)
 * - RectangularBento: Tech stack display (2 columns)
 *
 * Performance Optimizations:
 * - Dynamically imported components to reduce initial bundle size
 * - Implements loading states for smoother UX during component load
 * - Uses skeleton loaders (pulse animations) to improve perceived performance
 *
 * @example
 * ```tsx
 * <Features />
 * ```
 *
 * Note: Each bento component is lazily loaded. Proper loading states are ensured
 * while components are being fetched and rendered.
 */
