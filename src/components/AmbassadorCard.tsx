import { FC } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SocialLink {
  platform: string;
  url: string;
}

interface AmbassadorCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks: SocialLink[];
}

const AmbassadorCard: FC<AmbassadorCardProps> = ({ name, role, image, bio, socialLinks }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <img src={image} alt={name} className="w-full h-64 object-cover rounded-md" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-md text-gray-500 mb-4">{role}</p>
      <p className="text-lg text-gray-700 mb-4">{bio}</p>

      <div className="flex space-x-4">
        {socialLinks.map((link) => (
          <Link key={link.platform} href={link.url} target="_blank">
            <button className={cn("text-primary", "hover:text-primary-dark")}>
              {link.platform}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { AmbassadorCard };
