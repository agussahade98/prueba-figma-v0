import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const mori = localFont({src:[{path:"../../public/fonts/PPMori-Regular.ttf",weight:"400"},{path:"../../public/fonts/PPMori-Semibold.otf",weight:"600"}],variable:"--font-mori",display:"swap"});
const telegraf = localFont({src:"../../public/fonts/PPTelegraf-Regular.otf",variable:"--font-telegraf",display:"swap"});
export const metadata: Metadata = {title:"FLO Engineering | Built on Integrity. Engineered to last.",description:"From road repair to landslide stabilization, we restore what needs attention today while reinforcing what needs to last tomorrow."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={mori.variable+" "+telegraf.variable}>{children}</body></html>}
