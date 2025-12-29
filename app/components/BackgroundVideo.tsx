"use client";

import Image from "next/image";

export default function BackgroundVideo() {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-black">
            <Image
                src="/background.webp"
                alt="Background"
                fill
                priority
                className="object-cover opacity-60"
                quality={90}
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/80" />
        </div>
    );
}
