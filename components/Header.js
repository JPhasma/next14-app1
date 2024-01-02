"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="header">
            <ul>
                <li className={`link ${pathname === '/' ? 'active' : ''}`} >
                    <Link href="/">Home</Link>
                </li>
                <li className={`link ${pathname === '/dashboard' ? 'active' : ''}`} >
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                <li className={`link ${pathname === '/blog' ? 'active' : ''}`} >
                    <Link href="blog">Blog</Link>
                </li>
            </ul>
        </header>
    );
}
