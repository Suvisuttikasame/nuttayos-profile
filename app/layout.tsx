import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nuttayos Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <div>
          <header className="flex justify-between bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE] border-[#E63946] border-b-4 py-8 px-8">
            <div className="group transition-all ease-in-out duration-500 delay-150 hover:-translate-y-1 hover:scale-125  hover:font-bold">
              <Link href="/">
                <span>My Profile</span>
                <div className="transition-[width] ease-in-out duration-500 delay-150 bg-[#7AA3B0] h-1 w-0 clip-path-under-line group-hover:w-3/4" />
              </Link>
            </div>
            <ul className="flex gap-x-6">
              <li className="group transition-all ease-in-out duration-500 delay-150 hover:-translate-y-1 hover:scale-125 hover:font-bold">
                <Link href="/project">
                  <span>project</span>
                  <div className="transition-[width] ease-in-out duration-500 delay-150 bg-[#AAB8BC] h-1 w-0 clip-path-under-line group-hover:w-3/4" />
                </Link>
              </li>
              <li className="group transition-all ease-in-out duration-500 delay-150 hover:-translate-y-1 hover:scale-125 hover:font-bold">
                <Link href="https://www.google.com/" target="_blank">
                  <span>github</span>
                  <div className="transition-[width] ease-in-out duration-500 delay-150 bg-[#AAB8BC] h-1 w-0 clip-path-under-line group-hover:w-3/4" />
                </Link>
              </li>
            </ul>
          </header>
          <div className="h-16 bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE] clip-path-wave-down"></div>
          {children}
          <div className="h-16 bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE] clip-path-wave-up"></div>
          <footer className="bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE] text-xs text-center text-slate-500 py-4">
            &copy; Nuttayos Suvisuttikasame. All Rights Reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
