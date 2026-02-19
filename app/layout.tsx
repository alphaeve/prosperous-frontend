import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LenisProvider from "@/components/providers/LenisProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prosperous Solar | Engineering & Design Consultancy",
  description:
    "Expert Solar Design Engineering for Rooftop, Utility-Scale & C&I projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LenisProvider>
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}


















// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar"; // Import Navbar

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Prosperous Solar | Engineering & Design Consultancy",
//   description: "Expert Solar Design Engineering for Rooftop, Utility-Scale & C&I projects.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={inter.className}>
//         <Navbar />
//         {children}
//       </body>
//      </html> 
//   );
// }