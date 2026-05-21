import type { Metadata } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Sammi Tan | Portfolio',
  description: 'Think tech & digital media intertwined.',
  icons: {
    icon: [
      {
        url: '/placeholder.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/placeholder.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/placeholder.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/placeholder.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
