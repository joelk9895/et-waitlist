"use client";


export default function BackgroundVideo() {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
            <img src="/background.webp" alt="Background" />
        </div>
    );
}
