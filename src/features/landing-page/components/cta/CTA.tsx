import { BuyButton } from "@/components/BuyButton"
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"

export const CTA = () => {
    return (
        <section id="cta" className="relative overflow-hidden bg-neutral-900 border-t-3xl border-neutral-900">
            <MaxWidthWrapper className="relative flex flex-col items-center justify-center space-y-6 py-20 md:py-30">
                <hgroup className="relative z-20 flex items-center flex-col justify-center w-full gap-6">
                    <h2 className="flex-1 font-extrabold text-xl text-center md:text-4xl mb-2 max-w-lg">
                        Ace Your Next Interview
                    </h2>
                    <p className="flex-1 font-medium text-base text-center md:text-lg  max-w-lg w-full mb-8">
                        Unlock the best tools to prepare, practice, and succeed in your interviews. Get exclusive access to our expert-led resources today.
                    </p>
                </hgroup>

                <BuyButton text="Get Started" kit="Premium Kit" />
            </MaxWidthWrapper>
        </section>
    )
}
