"use client";
import "./style.css";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Running");
  }, []);
  return (
    <div>
      {navLinks.map((navLink) => {
        console.log(pathname);
        const isActive = pathname === navLink.href;

        console.log(isActive);
        return (
          <Link href={navLink.href} key={navLink.name} className={isActive ? "bg-blue" : ""}>
            {navLink.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
