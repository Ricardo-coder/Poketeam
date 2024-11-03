export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-4 p-8">
      <header>
        <h1>Header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <span>footer</span>
      </footer>
    </div>
  )
}
