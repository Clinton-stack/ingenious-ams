// /app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import HomeLayout from "@/components/HomeLayout";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Asset Management System",
  description: "An asset management system built with Next.js and Chakra UI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
         <HomeLayout>
          {children}
         </HomeLayout>
        </ChakraProvider>
      </body>
    </html>
  );
}
