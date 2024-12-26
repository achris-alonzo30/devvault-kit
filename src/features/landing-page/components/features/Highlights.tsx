import { cn } from "@/lib/utils";
import { MdEmail } from "react-icons/md";
import { TbEaseInOut } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { PiCreditCardFill } from "react-icons/pi";
import { SiGoogleanalytics } from "react-icons/si";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaDatabase, FaRocket } from "react-icons/fa6";

export const Highlights = () => {
  const highlights = [
    {
      title: "Advanced Interview Simulations",
      description:
        "Prepare for your next job interview with real-world interview simulations, powered by AI-driven question generation and feedback.",
      icon: <RiNextjsFill className="text-4xl" />,
    },
    {
      title: "Personalized Feedback",
      description:
        "Receive personalized, detailed feedback after each interview practice session, highlighting areas for improvement and suggesting resources.",
      icon: <MdEmail className="text-4xl" />,
    },
    {
      title: "Seamless Payment Solutions",
      description:
        "Easily upgrade your plan with seamless payments through Stripe or Lemon Squeezy, providing access to premium features and courses.",
      icon: <PiCreditCardFill className="text-4xl" />,
    },
    {
      title: "Secure User Authentication",
      description:
        "Sign in securely using your preferred method, whether it’s email, Google, or LinkedIn, with multi-factor authentication for added protection.",
      icon: <IoShieldCheckmark className="text-4xl" />,
    },
    {
      title: "Comprehensive Skill Database",
      description:
        "Access a growing database of interview questions, coding challenges, and mock interviews tailored to various roles and industries.",
      icon: <FaDatabase className="text-4xl" />,
    },
    {
      title: "Progress Tracking & Analytics",
      description:
        "Track your progress over time with detailed analytics, helping you identify areas for improvement and celebrate your growth.",
      icon: <FaRocket className="text-4xl" />,
    },
    {
      title: "Interactive Learning Modules",
      description:
        "Engage with interactive tutorials and coding challenges that enhance your interview preparation, making learning fun and effective.",
      icon: <SiGoogleanalytics className="text-4xl" />,
    },
    {
      title: "Easy Navigation & User Experience",
      description:
        "Enjoy a simple, intuitive interface that makes it easy to navigate between courses, practice tests, and your personalized dashboard.",
      icon: <TbEaseInOut className="text-4xl" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 max-w-7xl mx-auto">
      {highlights.map((feature, index) => (
        <Highlight key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

const Highlight = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center lg:border-r py-8 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {/* Hover Effect */}
      <div
        className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-background pointer-events-none"
      />
      <div className="mb-4 relative z-10 text-[#fcba28]">{icon}</div>
      <div className="text-lg font-semibold mb-2 relative z-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-foreground group-hover/feature:bg-[#fcba28] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-foreground max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
