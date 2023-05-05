export default function RecipeLayout({
    children,
}: {
    children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`max-w-3xl mx-auto`} >{children}</body>
    </html>
  )
}
