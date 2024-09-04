import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="w-full h-full bg-zinc-50 dark:bg-black">
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
