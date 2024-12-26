import { Zap } from "lucide-react";
import { CardBentoIcon } from "./CardBentoIcon";
import { CardBentoWrapper } from "./CardBentoWrapper";

export const SquareBento1 = () => {
    return (
        <div className="col-span-2 h-[375px] md:col-span-1 hover:scale-105 transition duration-200 ease-linear">
            <CardBentoWrapper className="flex flex-col bg-[#fcba28]/90"> {/* Original yellow color retained */}
                <CardBentoIcon icon={Zap} />
                <h3 className="mb-1.5 text-start text-2xl font-bold uppercase text-background">Accelerate Your Interview Preparation</h3>
                <p className="mb-6 text-start text-background">
                    Quickly prepare for interviews with curated coding challenges, instant feedback, and personalized recommendations.
                </p>
            </CardBentoWrapper>
        </div>
    );
};
