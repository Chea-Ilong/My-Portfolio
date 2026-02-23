import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

/* ───────────────────────────────── SEO ───────────────────────────────── */

const siteUrl = 'https://cheailong.vercel.app';
const siteName = 'Chea Ilong — Full-Stack Developer';
const siteDescription =
  'Portfolio of Chea Ilong, a Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Explore projects like AUREA and PhsarDesign, and learn about my experience in startup innovation and product development.';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f6f0' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export const metadata: Metadata = {
  /* ── Base ────────────────────────────────────────────────────────── */
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | Chea Ilong`,
  },
  description: siteDescription,
  generator: 'Next.js',
  applicationName: 'Chea Ilong Portfolio',

  /* ── Keywords ───────────────────────────────────────────────────── */
  keywords: [
    'Chea Ilong',
    'Full-Stack Developer',
    'Web Developer',
    'Software Engineer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'JavaScript',
    'Portfolio',
    'AUREA',
    'PhsarDesign',
    'Cambodia Developer',
    'CADT',
    'Frontend Developer',
    'Backend Developer',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
  ],

  /* ── Authors & Creator ──────────────────────────────────────────── */
  authors: [{ name: 'Chea Ilong', url: siteUrl }],
  creator: 'Chea Ilong',
  publisher: 'Chea Ilong',

  /* ── Robots / Crawling ──────────────────────────────────────────── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  /* ── Canonical ──────────────────────────────────────────────────── */
  alternates: {
    canonical: siteUrl,
  },

  /* ── Open Graph ─────────────────────────────────────────────────── */
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Chea Ilong',
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: '/mypic.png',
        width: 1200,
        height: 630,
        alt: 'Chea Ilong — Full-Stack Developer',
        type: 'image/png',
      },
    ],
  },

  /* ── Twitter Card ───────────────────────────────────────────────── */
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: ['/mypic.png'],
    creator: '@cheailong',
  },

  /* ── Icons ──────────────────────────────────────────────────────── */
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon-light-16x16.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },

  /* ── Misc ───────────────────────────────────────────────────────── */
  category: 'technology',
};

/* ──────────────────────── JSON-LD Structured Data ────────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Chea Ilong',
  url: siteUrl,
  image: `${siteUrl}/mypic.png`,
  jobTitle: 'Full-Stack Developer',
  description: siteDescription,
  sameAs: [
    'https://github.com/Chea-Ilong',
    'https://www.linkedin.com/in/chea-ilong-88bb83333/',
    'https://t.me/Chea_Ilong',
  ],
  knowsAbout: [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js',
    'PostgreSQL', 'MongoDB', 'Docker', 'Full-Stack Development',
  ],
};

/* ─────────────────────────── Root Layout ─────────────────────────────── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
