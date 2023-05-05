export default function RecipeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className={`mx-2 max-w-3xl md:mx-auto`}>{children}</section>
}
