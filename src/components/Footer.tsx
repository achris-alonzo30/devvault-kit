import Link from "next/link";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-auto border-t border-foreground/50 bg-neutral-900">
            <MaxWidthWrapper className="container flex flex-col items-center md:flex-row justify-between py-6 space-y-4 md:space-y-0">
                <p className="text-sm text-foreground font-medium text-center md:text-left">
                    © <span className="font-bold">interviewmaster.ai</span> - {year}
                </p>
                
                <div className="flex gap-4">
                    <Link href="/disclosure" className="text-sm text-foreground hover:text-[#fcba28] transition duration-200">
                        Disclosure
                    </Link>
                    <Link href="/privacy-policy" className="text-sm text-foreground hover:text-[#fcba28] transition duration-200">
                        Privacy Policy
                    </Link>
                </div>
                
                <div className="flex gap-4">
                    <Link
                        target="_blank"
                        href="https://x.com"
                        aria-label="Twitter Profile"
                    >
                        <FaXTwitter className="text-xl text-muted-foreground hover:text-[#fcba28] transition duration-200" />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://linkedin.com/"
                        aria-label="LinkedIn Profile"
                    >
                        <FaLinkedin className="text-xl text-muted-foreground hover:text-[#fcba28] transition duration-200" />
                    </Link>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
};
