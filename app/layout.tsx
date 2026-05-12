import "./globals.css";
import Navbar from "../components/Navbar";


export const metadata = {
  title: "Working Wonders Bookkeeping | Bookkeeper in Tallahassee, FL",

  description:
    "Working Wonders Bookkeeping provides professional bookkeeping, payroll support, and financial reporting services for businesses in Tallahassee, Florida and across the United States.",

  keywords: [
    "bookkeeper Tallahassee",
    "bookkeeping services Florida",
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
