import { Rights } from '@/components/CSR'
import { Footer, Header, Main } from '@/components/fabrics'
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
      <Main>{children}</Main>
      <Footer className="flex flex-col justify-center align-center border-solid border-t-2 p-8 border-stone-900 dark:border-stone-300">
        <Rights />
      </Footer>
    </div>
  )
}
