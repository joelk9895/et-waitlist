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
                className="object-cover"
                quality={90}
            />
        </div>
    );
}
