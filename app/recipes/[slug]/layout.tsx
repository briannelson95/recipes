export default function RecipeLayout({
    children,
}: {
    children: React.ReactNode
}) {
  return <section className={`max-w-3xl mx-auto`}>{children}</section>
}
