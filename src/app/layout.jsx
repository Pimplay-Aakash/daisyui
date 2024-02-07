// import { Inter } from "next/font/google";/
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
          <main className=" mx-auto min-h-screen">
            {children}
          </main>
        <Footer/>
      </body>
    </html>
  );
}
