import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
        <div className="flex flex-col min-h-screen">
          <header className="flex justify-between bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE] py-8 px-8">
            <div className="group transition-all ease-in-out duration-500 delay-150 hover:-translate-y-1 hover:scale-125  hover:font-bold">
              <Link href="/">
                <span>My Profile</span>
                <div className="transition-[width] ease-in-out duration-500 delay-150 bg-[#E63946] h-1 w-0 clip-path-under-line group-hover:w-3/4" />
              </Link>
            </div>
            <ul className="flex gap-x-6">
              <li className="group transition-all ease-in-out duration-500 delay-150 hover:-translate-y-1 hover:scale-125 hover:font-bold">
                <Link href="/project">
                  <span>project</span>
                  <div className="transition-[width] ease-in-out duration-500 delay-150 bg-[#E63946] h-1 w-0 clip-path-under-line group-hover:w-3/4" />
                </Link>
              </li>
            </ul>
          </header>
          <div className="h-16 bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE] clip-path-wave-down"></div>
          {children}
          <div className="h-16 bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE] clip-path-wave-up"></div>
          <footer className="bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE] text-xs text-slate-500 p-4 flex items-center justify-between">
            <div>&copy; Nuttayos Suvisuttikasame. All Rights Reserved.</div>
            <ul className="flex gap-4">
              <li>
                <Link href="https://github.com/Suvisuttikasame" target="_blank">
                  <FaGithub size="24px" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/nuttayos-suvisuttikasame-8a2693215/"
                  target="_blank"
                >
                  <FaLinkedin size="24px" />
                </Link>
              </li>
            </ul>
          </footer>
        </div>
      </body>
    </html>
  );
}
