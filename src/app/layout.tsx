import  "../styles/global.css";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
