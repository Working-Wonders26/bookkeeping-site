import "./globals.css";
import Navbar from "../components/Navbar";


export const metadata = {
  title: "Working Wonders Bookkeeping | Bookkeeper in Middleton, ID",

  description:
    "Working Wonders Bookkeeping provides professional bookkeeping, payroll support, and financial reporting services for businesses in Middleton, Idaho and across the United States.",

  keywords: [
    "bookkeeper Middleton",
    "bookkeeping services Idaho",
    "small business bookkeeping",
    "QuickBooks bookkeeper",
    "payroll support",
    "financial reporting",
    "bookkeeping services near me",
    "virtual bookkeeping",
  ],
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
