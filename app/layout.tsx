import './globals.css'
import Header from './components/Header'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <header>
          <Header />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
