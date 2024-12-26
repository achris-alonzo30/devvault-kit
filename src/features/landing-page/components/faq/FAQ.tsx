'use client'

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { FiChevronDown } from "react-icons/fi";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";

const questions = [
    {
        id: 1,
        question: "What is InterviewMaster.site and how can it help me prepare for interviews?",
        answer: "InterviewMaster.site is a platform designed to help you ace your technical interviews. It offers coding challenges, interview questions, and mock interview sessions, along with detailed solutions and explanations to prepare you for real-world interviews."
    },
    {
        id: 2,
        question: "Can I customize the interview topics on InterviewMaster.site?",
        answer: "Yes, you can select from various coding topics, difficulty levels, and even programming languages, ensuring that your preparation aligns with the specific requirements of your target job."
    },
    {
        id: 3,
        question: "Is InterviewMaster.site beginner-friendly?",
        answer: "Absolutely! InterviewMaster.site is designed for both beginners and advanced users. We provide guided tutorials, step-by-step solutions, and a comprehensive FAQ section to help users at every stage of their learning."
    },
    {
        id: 4,
        question: "How quickly can I start using InterviewMaster.site?",
        answer: "Getting started is simple! Sign up on InterviewMaster.site, and you can start practicing coding challenges and mock interviews right away. No setup required."
    },
    {
        id: 5,
        question: "Can I track my progress on InterviewMaster.site?",
        answer: "Yes, InterviewMaster.site provides a progress tracker that allows you to monitor your learning journey. You can review your completed challenges, areas where you need improvement, and set milestones to keep yourself motivated."
    },
    {
        id: 6,
        question: "Do you offer a money-back guarantee or refund policy?",
        answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our services, you can request a full refund within 30 days of purchase."
    },
    {
        id: 7,
        question: "How do I prepare for a mock interview on InterviewMaster.site?",
        answer: "You can choose from a list of mock interview sessions in various domains like algorithms, data structures, system design, and behavioral interviews. Simply select your area of interest, and we’ll simulate an interview scenario for you."
    },
    {
        id: 8,
        question: "Can I receive feedback on my mock interview performance?",
        answer: "Yes, after each mock interview, you will receive detailed feedback on your performance. This includes insights into what went well, areas of improvement, and tips for enhancing your responses."
    },
    {
        id: 9,
        question: "How do I stay updated with new features and content on InterviewMaster.site?",
        answer: "After signing up, you’ll automatically receive email notifications about new content, features, and updates. You can also check the dashboard for the latest challenges and resources."
    }
];

export const FAQ = () => {
    return (
        <section className="px-4 py-12">
            <MaxWidthWrapper>
                <article className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <hgroup className="flex flex-col gap-2 mt-6">
                        <h3 className="mb-4 text-3xl text-center md:text-start font-bold">
                            Frequently Asked Questions
                        </h3>
                        <p className="font-medium text-base text-center md:text-start md:text-lg max-w-md">
                            Have questions? We are here to help. If you don’t find what you’re looking for, feel free to <Link className="text-[#fcba28] font-bold hover:underline" href="mailto:support@interviewmaster.site">contact us</Link>.
                        </p>
                    </hgroup>
                    <aside>
                        {questions.map((q, i) => (
                            <Question key={i} title={q.question} defaultOpen={q.id === 1}>
                                {q.answer}
                            </Question>
                        ))}
                    </aside>
                </article>
            </MaxWidthWrapper>
        </section>
    );
};

const Question = ({
    title,
    children,
    defaultOpen = false,
}: {
    title: string;
    defaultOpen?: boolean;
    children: React.ReactNode;
}) => {
    const [ref, { height }] = useMeasure();
    const [open, setOpen] = useState(defaultOpen);

    return (
        <motion.div
            animate={open ? "open" : "closed"}
            className="border-b-[1px] border-b-slate-300"
        >
            <button
                onClick={() => setOpen((pv) => !pv)}
                className="flex w-full items-center justify-between gap-4 py-6"
            >
                <span className="text-[#fcba28] text-left text-lg font-bold">
                    {title}
                </span>
                <motion.span
                    variants={{
                        open: { rotate: "180deg" },
                        closed: { rotate: "0deg" },
                    }}
                >
                    <FiChevronDown className="text-2xl text-[#fcba28]" />
                </motion.span>
            </button>
            <motion.div
                initial={false}
                animate={{
                    height: open ? height : "0px",
                    marginBottom: open ? "24px" : "0px",
                }}
                className="overflow-hidden text-foreground"
            >
                <p ref={ref}>{children}</p>
            </motion.div>
        </motion.div>
    );
};
