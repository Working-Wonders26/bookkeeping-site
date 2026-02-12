import "./globals.css";
import Navbar from "../components/Navbar";


export const metadata = {
  title: "Working Wonders Bookkeeping LLC",
  description: "Professional bookkeeping services for small businesses",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
