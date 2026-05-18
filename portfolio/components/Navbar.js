"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "PROJECTS" },
    { href: "/resume", label: "RESUME" },
    { href: "/about", label: "ABOUT" },
  ];

  return (
    <>
      <nav className="bg-white/70 dark:bg-surface-dark/70 backdrop-blur-lg backdrop-saturate-150 h-[80px] w-full rounded-none border-b border-hairline dark:border-outline-variant flex justify-between items-center px-margin fixed top-0 z-50 transition-colors duration-300 shadow-sm">
        <div className="font-mono-spec text-title-md font-bold tracking-tighter text-primary dark:text-on-primary">
          JERMANE JIRO S. JABSON
        </div>
        <div className="hidden md:flex gap-margin">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === '/' && pathname === '/index.html');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive
                    ? "text-primary dark:text-on-primary border-b-2 border-primary dark:border-on-primary pb-1"
                    : "text-muted dark:text-on-surface-variant"
                } font-mono-spec text-mono-spec uppercase tracking-[2px] hover:text-primary dark:hover:text-on-primary transition-all duration-300 scale-100 active:scale-95`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 text-primary dark:text-on-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>
      <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden fixed inset-0 top-[80px] bg-canvas text-primary z-40 flex-col py-lg px-margin gap-lg border-b border-hairline transition-all duration-300`}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href === '/' && pathname === '/index.html');
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-mono-spec tracking-[2px] uppercase ${isActive ? "text-primary font-bold" : "hover:text-secondary"}`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
