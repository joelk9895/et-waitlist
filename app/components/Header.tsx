"use client";

import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";

const anton = Anton({
    variable: "--font-anton-header",
    weight: "400",
    subsets: ["latin"],
});

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 sm:px-12">
            <div className="flex items-center gap-2">
                <Image src="/logo.svg" alt="Logo" width={300} height={300} />
            </div>

            {/* Sign In removed for now */}
        </header>
    );
}
