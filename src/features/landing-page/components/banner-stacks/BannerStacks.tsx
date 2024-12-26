import Image from "next/image";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";

// Array of tech stacks with logos, customized for InterviewMaster.ai
const stacks = [
  {
    name: "NextJS",
    url: "/logo-stacks/next-js.svg"
  },
  {
    name: "TailwindCSS",
    url: "/logo-stacks/tailwindcss.svg"
  },
  {
    name: "Framer Motion",
    url: "/logo-stacks/framer-motion.svg"
  },
  {
    name: "Convex",
    url: "/logo-stacks/convex.svg"
  },
  {
    name: "Stripe",
    url: "/logo-stacks/stripe.svg"
  }
];

export const BannerStacks = () => {
  return (
    <section id="banner-stacks" className="relative overflow-hidden py-10 bg-gradient-to-r from-blue-600 to-purple-700">
      <MaxWidthWrapper className="relative z-20 flex items-center flex-col md:flex-row justify-center gap-10 md:gap-16">
        <p className="text-white text-2xl font-semibold text-center md:text-left">POWERED BY INTERVIEWMASTER.AI</p>
        <aside className="flex items-center justify-center md:justify-start flex-wrap gap-12">
          {stacks.map((stack, index) => (
            <div
              key={index}
              className="flex items-center flex-col md:flex-row gap-3 transition-transform transform hover:scale-110"
              aria-label={`Tech stack: ${stack.name}`}
            >
              <div className="w-16 h-16 overflow-hidden rounded-full bg-white shadow-lg flex items-center justify-center">
                <Image
                  width={50}
                  height={50}
                  src={stack.url}
                  alt={`${stack.name} logo`}
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-white text-lg text-center">{stack.name}</p>
            </div>
          ))}
        </aside>
      </MaxWidthWrapper>
    </section>
  );
};
