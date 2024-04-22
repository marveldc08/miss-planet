import  "../styles/global.css";
export const metadata = {
  title: 'Miss Planet ',
  description: 'Miss Planet Collectables',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
