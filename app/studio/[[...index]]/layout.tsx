import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blogit!',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <header className="flex items-center justify-between">
          
          {/* <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link href={`/${page.slug}`} key={page._id}>
                {page.title}
              </Link>
            ))}
          </div> */}
        </header>

        <main>{children}</main>        
        
        </body>
    </html>
  )
}
