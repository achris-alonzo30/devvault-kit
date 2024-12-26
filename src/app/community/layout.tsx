import "../globals.css";
import { cn } from "@/lib/utils";
import { Noto_Sans } from "next/font/google";
import { Analytics } from "@/lib/analytics/Analytics";
import { generateMetadata } from "@/lib/generateMetadata";
import { ConvexClientProvider } from "@/providers/ConvexAuthProvider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

import NextTopLoader from "nextjs-toploader";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const font = Noto_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = generateMetadata();

export default function CommunityLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, "antialiased")}>
          <ConvexClientProvider>
            <NextTopLoader showSpinner={false} color="#fcba28" />
            <Toaster />
            {/* Header for Community Page */}
            <Header />
            {/* Main content for community section */}
            <main className="container mx-auto p-6 bg-background text-foreground my-12">
              {children}
            </main>
            {/* Footer for Community Page */}
            <Footer />
          </ConvexClientProvider>
        </body>
        <Analytics />
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
