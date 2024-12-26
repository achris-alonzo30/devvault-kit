// @ts-nocheck
import { useState, useEffect } from "react";
import { AnimationProps, motion } from "framer-motion";

// Icons related to the interview process, technology stack, and the purpose of InterviewMaster.ai
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaLaptopCode, FaQuestionCircle } from "react-icons/fa";
import { SiReact, SiGithub } from "react-icons/si";
import { TbDatabase, TbShieldLockFilled } from "react-icons/tb";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

// Custom Components for Bento
import { CardBentoIcon } from "./CardBentoIcon";
import { CardBentoWrapper } from "./CardBentoWrapper";

export const RectangularBento = () => {
  return (
    <div className="col-span-2 h-fit sm:h-[209px] hover:scale-105 transition duration-200 ease-linear">
      <CardBentoWrapper className="bg-[#0ba95b]">
        <div className="relative z-20">
          <CardBentoIcon icon={FaQuestionCircle} />
          <h3 className="mb-1.5 text-2xl font-bold uppercase text-background">
            Interview Preparation Made Easy
          </h3>
          <p className="max-w-sm text-background">
            Prepare for interviews with our expert-backed resources, quizzes, and real-time coding challenges to help you ace your next big opportunity.
          </p>
        </div>
        <SpinningLogos />
      </CardBentoWrapper>
    </div>
  );
};

const SpinningLogos = () => {
  const { width } = useWindowSize();

  const [sizes, setSizes] = useState({
    radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.lg,
    iconWrapperWidth: ICON_WRAPPER_WIDTH.lg,
    ringPadding: RING_PADDING.lg,
    logoFontSize: LOGO_FONT_SIZE.lg,
  });

  useEffect(() => {
    if (!width) return;

    if (width < BREAKPOINTS.sm) {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.sm,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.sm,
        ringPadding: RING_PADDING.sm,
        logoFontSize: LOGO_FONT_SIZE.sm,
      });
    } else if (width < BREAKPOINTS.md) {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.md,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.md,
        ringPadding: RING_PADDING.md,
        logoFontSize: LOGO_FONT_SIZE.md,
      });
    } else {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.lg,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.lg,
        ringPadding: RING_PADDING.lg,
        logoFontSize: LOGO_FONT_SIZE.lg,
      });
    }
  }, [width]);

  return (
    <div
      style={{
        width:
          sizes.radiusToCenterOfIcons +
          sizes.iconWrapperWidth +
          sizes.ringPadding,
        height:
          sizes.radiusToCenterOfIcons +
          sizes.iconWrapperWidth +
          sizes.ringPadding,
      }}
      className="absolute right-0 top-0 z-0 grid translate-x-1/3 place-content-center rounded-full bg-neutral-900/50 shadow-inner"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={TRANSITION}
        style={{
          width:
            sizes.radiusToCenterOfIcons - sizes.iconWrapperWidth - sizes.ringPadding,
          height:
            sizes.radiusToCenterOfIcons - sizes.iconWrapperWidth - sizes.ringPadding,
        }}
        className="relative grid place-items-center rounded-full shadow"
      >
        {ICON_DATA.map((icon, idx) => {
          const degrees = (360 / ICON_DATA.length) * idx;
          return (
            <motion.div
              key={idx}
              style={{
                marginTop:
                  sizes.radiusToCenterOfIcons *
                  Math.sin(degreesToRadians(degrees)),
                marginLeft:
                  sizes.radiusToCenterOfIcons *
                  Math.cos(degreesToRadians(degrees)),
                width: sizes.iconWrapperWidth,
                height: sizes.iconWrapperWidth,
              }}
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={TRANSITION}
              className="absolute grid place-content-center rounded-full bg-gradient-to-br from-[#f38ba3] to-[#f38ba3]/80 text-foreground shadow-lg"
            >
              <icon.Icon
                style={{
                  fontSize: sizes.logoFontSize,
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const degreesToRadians = (degrees: number) => {
  return degrees * (Math.PI / 180);
};

const ICON_DATA = [
  {
    Icon: SiGithub,
  },
  {
    Icon: RiNextjsFill,
  },
  {
    Icon: SiReact,
  },
  {
    Icon: RiTailwindCssFill,
  },
  {
    Icon: TbShieldLockFilled,
  },
  {
    Icon: TbDatabase,
  },
  {
    Icon: FaLaptopCode,
  },
  {
    Icon: BsFillPersonCheckFill,
  },
];

const RADIUS_TO_CENTER_OF_ICONS = {
  sm: 150,
  md: 225,
  lg: 325,
};

const ICON_WRAPPER_WIDTH = {
  sm: 40,
  md: 65,
  lg: 80,
};

const RING_PADDING = {
  sm: 8,
  md: 12,
  lg: 24,
};

const LOGO_FONT_SIZE = {
  sm: 18,
  md: 24,
  lg: 36,
};

const BREAKPOINTS = {
  sm: 480,
  md: 768,
};

const TRANSITION: AnimationProps["transition"] = {
  repeat: Infinity,
  repeatType: "loop",
  duration: 50,
  ease: "linear",
};
