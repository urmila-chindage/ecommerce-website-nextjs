export default function FrontLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="flex-grow container-fluid mx-auto px-4">{children}</main>
}
