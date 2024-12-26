// @ts-nocheck
"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from "next/link";
import Image from 'next/image';
import { useState, useRef, memo } from 'react';
import { motion, useInView } from 'framer-motion';

import {
    Star,
    Play,
    Pause,
    Volume2,
    VolumeX,
    Quote,
} from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChipBanner } from "@/components/ChipBanner";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";

// Memoized components for better performance
const StarRating = memo(({ rating }: { rating: number }) => (
    <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-[#FF652F]" fill="currentColor" />
        ))}
    </div>
));
StarRating.displayName = 'StarRating';

const TestimonialCard = memo(({ testimonial }: { testimonial: typeof testimonialData[0] }) => (
    <Card className="h-full bg-foreground/5 hover:bg-foreground/10 transition-colors duration-300 backdrop-blur-sm border-none shadow-lg">
        <CardContent className="p-6 flex flex-col h-full">
            <Quote className="w-8 h-8 text-[#fcba28] mb-4" />
            <StarRating rating={testimonial.rating} />
            <blockquote className="my-4 text-lg italic text-foreground/90">
                &quot;{testimonial.review}&quot;
            </blockquote>
            <div className="flex items-center mt-auto pt-4 border-t border-foreground/10">
                <Image
                    width={40}
                    height={40}
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="rounded-full"
                />
                <div className="ml-3">
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/70">{testimonial.role}</p>
                </div>
            </div>
        </CardContent>
    </Card>
));
TestimonialCard.displayName = 'TestimonialCard';

// Optimized testimonial data
const testimonialData = [
    {
        name: "Sarah Johnson",
        role: "Startup Founder",
        review: "InterviewMaster.site provided a personalized, intuitive platform that helped our candidates excel and land their dream jobs. Their system is unparalleled in performance and user experience.",
        rating: 5,
        image: "/avatar.png"
    },
    {
        name: "Michael Chen",
        role: "Hiring Manager",
        review: "InterviewMaster.site revolutionized our interview process. The platform allowed us to streamline our hiring and made a huge impact on our recruitment efficiency.",
        rating: 5,
        image: "/avatar.png"
    },
    {
        name: "Emma Rodriguez",
        role: "HR Specialist",
        review: "Thanks to InterviewMaster.site, our candidates now feel more confident with their interview preparation. The resources provided are top-notch and truly make a difference.",
        rating: 5,
        image: "/avatar.png"
    },
    {
        name: "David Patel",
        role: "Software Engineer",
        review: "InterviewMaster.site helped me prepare for some of the toughest tech interviews I’ve ever had. The mock interview platform and coding challenges were invaluable.",
        rating: 5,
        image: "/avatar.png"
    },
    {
        name: "John Smith",
        role: "Product Manager",
        review: "As a recruiter, InterviewMaster.site made candidate evaluation faster and more efficient. The intuitive interface and detailed insights saved us so much time.",
        rating: 5,
        image: "/avatar.png"
    }
];

const VideoTestimonial = memo(({ isPlaying, isMuted, onPlayClick, onMuteClick }: {
    isPlaying: boolean;
    isMuted: boolean;
    onPlayClick: () => void;
    onMuteClick: () => void;
}) => (
    <div className="relative aspect-video rounded-lg overflow-hidden">
        <video className="w-full h-full object-cover">
            <source src="/coming-soon-clip.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <Button
                size="icon"
                variant="secondary"
                onClick={onPlayClick}
                className="bg-white/90 hover:bg-white"
            >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            <Button
                size="icon"
                variant="secondary"
                onClick={onMuteClick}
                className="bg-white/90 hover:bg-white"
            >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
        </div>
    </div>
));
VideoTestimonial.displayName = 'VideoTestimonial';

export const Testimonials = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <section ref={sectionRef} className="relative py-20 bg-gradient-to-b from-background to-background/95">
            <MaxWidthWrapper>
                <div className="flex flex-col items-center justify-center mb-12">
                    <ChipBanner text="TESTIMONIALS" />
                    <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        Trusted by <span className="text-[#fcba28]">Amazing</span> People
                    </h2>
                    <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                        Don&apos;t just take our word for it - hear from some of our satisfied users of InterviewMaster.site.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Featured Video Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="col-span-1 md:col-span-2 lg:col-span-1"
                    >
                        <Card className="h-full bg-[#fcba28]/10 hover:bg-[#fcba28]/20 transition-colors duration-300 backdrop-blur-sm border-none shadow-lg">
                            <CardContent className="p-6 flex flex-col h-full">
                                <VideoTestimonial
                                    isPlaying={isPlaying}
                                    isMuted={isMuted}
                                    onPlayClick={togglePlay}
                                    onMuteClick={toggleMute}
                                />
                                <div className="mt-6">
                                    <StarRating rating={5} />
                                    <blockquote className="my-4 text-lg italic">
                                        &quot;InterviewMaster.site helped streamline our recruitment process, making it faster and more accurate.&quot;
                                    </blockquote>
                                    <div className="flex items-center">
                                        <Image
                                            width={40}
                                            height={40}
                                            alt="John Doe"
                                            src="/avatar.png"
                                            className="rounded-full"
                                        />
                                        <div className="ml-3">
                                            <p className="font-medium">John Doe</p>
                                            <p className="text-sm text-foreground/70">CEO, Tech Innovators</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Text Testimonials */}
                    {testimonialData.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                        >
                            <TestimonialCard testimonial={testimonial} />
                        </motion.div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
};
