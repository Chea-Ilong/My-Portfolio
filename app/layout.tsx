import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });

/* ───────────────────────────────── SEO ───────────────────────────────── */

const siteUrl = 'https://cheailong.dev';
const siteName = 'Chea Ilong | Full-Stack Developer in Cambodia';
const siteDescription =
  'Chea Ilong is a full-stack developer in Cambodia building secure, production-ready web products with Next.js, React, TypeScript, PostgreSQL, and Supabase.';

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
    'LeakScope',
    'AUREA',
    'PhsarDesign',
    'Cambodia Developer',
    'Supabase Developer',
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
    alternateLocale: ['km_KH'],
    url: siteUrl,
    siteName: 'Chea Ilong',
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: '/mypic.png',
        width: 640,
        height: 640,
        alt: 'Chea Ilong, Full-Stack Developer in Cambodia',
        type: 'image/png',
      },
    ],
  },

  /* ── Twitter Card ───────────────────────────────────────────────── */
  twitter: {
    card: 'summary',
    title: siteName,
    description: siteDescription,
    images: ['/mypic.png'],
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

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: 'Chea Ilong',
    alternateName: ['Ilong Chea', 'cheailong', 'Chea ilong', 'chea ilong', 'Chea-Ilong'],
    url: siteUrl,
    image: `${siteUrl}/mypic.png`,
    jobTitle: 'Full-Stack Developer',
    description: siteDescription,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteUrl,
    },
    nationality: {
      '@type': 'Country',
      name: 'Cambodia',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Cambodia Academy of Digital Technology (CADT)',
      url: 'https://www.cadt.edu.kh',
    },
    sameAs: [
      'https://github.com/Chea-Ilong',
      'https://www.linkedin.com/in/chea-ilong-88bb83333/',
      'https://t.me/Chea_Ilong',
    ],
    knowsAbout: [
      'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js',
      'PostgreSQL', 'Supabase', 'MongoDB', 'Docker', 'Full-Stack Development',
      'Web Application Security',
    ],
    knowsLanguage: [
      {
        '@type': 'Language',
        name: 'English',
        alternateName: 'en',
      },
      {
        '@type': 'Language',
        name: 'Khmer',
        alternateName: 'km',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Chea Ilong | Full-Stack Developer Portfolio',
    url: siteUrl,
    description: siteDescription,
    inLanguage: ['en', 'km'],
    author: {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
    },
  },
];

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
      <body className={`${_geist.className} antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
