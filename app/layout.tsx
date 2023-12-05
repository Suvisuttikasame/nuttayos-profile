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
      <body className={`${montserrat.className} relative flex flex-col`}>
        <div className="absolute w-3/4 z-30 left-1/2 -translate-x-2/4">
          <header className="flex justify-between border-[#E63946] border-b-4 py-4">
            <div className="group transition ease-in-out duration-500 delay-150 hover:-translate-y-1 hover:scale-125">
              <Link href="/">
                <span>My Profile</span>
                <div className="transition-[width] ease-in-out duration-500 delay-150 bg-[#7AA3B0] h-1 w-0 clip-path-under-line group-hover:w-3/4" />
              </Link>
            </div>
            <ul className="flex gap-x-6">
              <li className="group transition ease-in-out duration-500 delay-150 hover:-translate-y-1 hover:scale-125">
                <Link href="/project">
                  <span>project</span>
                  <div className="transition-[width] ease-in-out duration-500 delay-150 bg-[#AAB8BC] h-1 w-0 clip-path-under-line group-hover:w-3/4" />
                </Link>
              </li>
              <li className="group transition ease-in-out duration-500 delay-150 hover:-translate-y-1 hover:scale-125">
                <Link href="/contact">
                  <span>contact</span>
                  <div className="transition-[width] ease-in-out duration-500 delay-150 bg-[#AAB8BC] h-1 w-0 clip-path-under-line group-hover:w-3/4" />
                </Link>
              </li>
              <li className="group transition ease-in-out duration-500 delay-150 hover:-translate-y-1 hover:scale-125">
                <Link href="https://www.google.com/" target="_blank">
                  <span>github</span>
                  <div className="transition-[width] ease-in-out duration-500 delay-150 bg-[#AAB8BC] h-1 w-0 clip-path-under-line group-hover:w-3/4" />
                </Link>
              </li>
            </ul>
          </header>
          {children}
        </div>
        <div className="h-14 bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE]"></div>
        <div className="h-28 bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE] clip-path-wave"></div>
        <div className="h-64"></div>
        <div className="h-64 bg-white clip-path-wave"></div>
        <div className="h-28 bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE] -mt-28"></div>
        <div className="h-28 bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE] clip-path-wave"></div>
      </body>
    </html>
  );
}
