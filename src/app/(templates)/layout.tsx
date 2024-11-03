export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <span>footer</span>
      </footer>
    </>
  )
}
