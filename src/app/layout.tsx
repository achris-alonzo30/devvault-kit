import "./globals.css";

import { Analytics } from "@vercel/analytics/react"
import { cn } from "@/lib/utils";
import { Noto_Sans } from 'next/font/google';
import { generateMetadata } from "@/lib/generateMetadata";
import { ConvexClientProvider } from "@/providers/ConvexAuthProvider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import NextTopLoader from 'nextjs-toploader';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import dynamic from 'next/dynamic';

const font = Noto_Sans({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata = generateMetadata();

// Dynamically import components that use client-side features
const DynamicHeader = dynamic(() => import('@/components/Header').then(mod => mod.Header), {
  ssr: false
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            font.className,
            "min-h-screen antialiased bg-background text-foreground",
            "flex flex-col"
          )}
        >
          <ConvexClientProvider>
            <NextTopLoader showSpinner={false} color="#fcba28" />
            <Toaster position="top-center" />
            <div className="flex flex-col flex-1">
              <DynamicHeader />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </ConvexClientProvider>
          <Analytics />
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
