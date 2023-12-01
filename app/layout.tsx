import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Expansion',
  description: 'Expand your vocabulary with expansion, a thesaurus powered by Chat GPT-4',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body">{children}</body>
    </html>
  )
}
