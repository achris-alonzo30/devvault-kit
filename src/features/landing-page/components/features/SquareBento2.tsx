import { Puzzle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CardBentoIcon } from "./CardBentoIcon";
import { CardBentoWrapper } from "./CardBentoWrapper";

const mockComponents = [
  { id: 1, color: "bg-blue-400" },
  { id: 2, color: "bg-green-400" },
  { id: 3, color: "bg-yellow-400" },
  { id: 4, color: "bg-red-400" },
];

export const SquareBento2 = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getPosition = (id: number) => {
    switch (step) {
      case 0:
        return { top: "0%", left: `${(id - 1) * 25}%`, width: "25%", height: "50%" };
      case 1:
        return { top: `${id % 2 ? "0%" : "50%"}`, left: `${id <= 2 ? "0%" : "50%"}`, width: "50%", height: "50%" };
      case 2:
        return { top: "25%", left: `${(id - 1) * 25}%`, width: "25%", height: "50%" };
      case 3:
        return { top: `${(id - 1) * 25}%`, left: "0%", width: "100%", height: "25%" };
      default:
        return {};
    }
  };

  return (
    <div className="col-span-2 h-[415px] sm:h-[375px] md:col-span-1 hover:scale-105 transition duration-200 ease-linear">
      <CardBentoWrapper className="bg-foreground/90">
        <CardBentoIcon icon={Puzzle} />
        <h3 className="mb-1.5 text-2xl text-background font-bold uppercase">Master Your Interview Skills</h3>
        <p className="text-background">
          Fine-tune your coding and problem-solving skills with real-time feedback and tailored exercises, all aimed at preparing you for interviews.
        </p>
        <div className="relative -bottom-2 z-10 h-44 rounded-xl border border-background bg-neural-100">
          {/* Add a defined height here */}
          <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
            {mockComponents.map((component) => (
              <motion.div
                key={component.id}
                className={`absolute ${component.color} rounded-md shadow-md flex items-center justify-center`}
                initial={getPosition(component.id)}
                animate={getPosition(component.id)}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            ))}
          </div>
        </div>
      </CardBentoWrapper>
    </div>
  );
};
