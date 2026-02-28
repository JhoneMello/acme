import type { Metadata } from "next";
import React, { Children } from "react";
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: 'ACME' 
}

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang='pt-BR'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}