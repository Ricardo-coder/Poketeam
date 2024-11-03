import { Header } from '@/components/fabrics'
import { Logo } from '@/components/SSR/Logo'

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-4 p-8">
      <Header>
        <Logo />
      </Header>
      <main>{children}</main>
      <footer>
        <span>footer</span>
      </footer>
    </div>
  )
}
