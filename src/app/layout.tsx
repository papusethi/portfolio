import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="mx-auto px-4 w-full sm:w-8/12">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
