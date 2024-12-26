import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// TODO: Replace this with your own logo
// TODO: I like to create a component for this, so I can reuse it in other places

// To get your logos head over: SVG Repo, UntitledUI/logos these are great website to get your logos

export const Logo = ({ className }: { className?: string; }) => {
    return (
        <Link href="/" className={cn("flex items-center", className)}>
            <Image
                width={50}
                height={50}
                src="/logo.svg"
                alt="Dev Logo"
            />
            <p className="font-semibold leading-relaxed text-2xl">interviewmaster.ai</p>
        </Link>
    )
}