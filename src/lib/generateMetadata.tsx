import { Metadata } from "next";

// TODO: Customize it with your app details
// Replace title
// Replace Description
// Replace the image, you can build it using Canva, Figma, or any other tool you want to use 
// Replace the website URL with yours
// Replace the twitter handle with yours
// Replace the icons or favicons with yours

export function generateMetadata({
  title = "interviewmaster.ai",
  description = " ",
  image = "/thumbnail.png",
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  const fullImageUrl = new URL(image, 'https://www.devvault.dev').toString()
  return {
    title,
    description,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://www.devvault.dev',
      siteName: 'DevVault',
      title,
      description,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: 'DevVault',
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@lonz_chris",
      site: "@0dev_vault"
    },
    icons: [
      {
        rel: 'icon',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
        url: '/seo/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
        url: '/seo/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        url: '/seo/apple-touch-icon.png',
      },
    ],
    metadataBase: new URL('https://www.devvault.dev'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
