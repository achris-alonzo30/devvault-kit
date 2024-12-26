import Link from "next/link";

interface NavLinkProps {
    href: string;
    text: string;  // Using 'text' as per your previous code
}

export const NavLink = ({ href, text }: NavLinkProps) => {
    return (
        <Link
            href={href}
            className="text-base font-semibold hover:underline whitespace-nowrap"
            // Optional: Adding `aria-label` for accessibility
            aria-label={text}
        >
            {text}
        </Link>
    );
};
