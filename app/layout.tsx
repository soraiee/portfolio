import type { Metadata } from 'next'
import './globals.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const iconPath = `${basePath}/placeholder.jpg`

export const metadata: Metadata = {
  title: 'Sammi Tan | Portfolio',
  description: 'Think tech & digital media intertwined.',
  icons: {
    icon: [
      {
        url: iconPath,
        media: '(prefers-color-scheme: light)',
      },
      {
        url: iconPath,
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: iconPath,
        type: 'image/svg+xml',
      },
    ],
    apple: iconPath,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
