"use client";

import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
    variable: "--font-anton-header",
    weight: "400",
    subsets: ["latin"],
});

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 sm:px-12 sm:py-6">
            <div className="flex items-center gap-2">
                <div className="w-40 sm:w-64">
                    <Image src="/logo.svg" alt="Logo" width={300} height={300} className="w-full h-auto" />
                </div>
            </div>

            {/* Sign In removed for now */}
        </header>
    );
}
