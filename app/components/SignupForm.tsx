"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Check } from "lucide-react";
import clsx from "clsx";

export default function SignupForm() {
    const [email, setEmail] = useState("");
    const [isProducer, setIsProducer] = useState(false);
    const [isFan, setIsFan] = useState(false);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isProducer && !isFan) {
            setMessage("Please select at least one option.");
            setStatus("error");
            return;
        }

        setStatus("loading");
        setMessage("");

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    type: isProducer ? "artist" : "fan", // Prioritize artist list if selected
                    attributes: {
                        IS_PRODUCER: isProducer,
                        IS_FAN: isFan,
                    },
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setStatus("success");
            setMessage("You're on the list!");
            setEmail("");
            setIsProducer(false);
            setIsFan(false);
        } catch (error: any) {
            setStatus("error");
            setMessage(error.message);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="w-full"
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                {/* Checkbox Options - Custom Design */}
                <div className="flex flex-col gap-4">
                    <label className="flex items-center gap-4 cursor-pointer group relative">
                        <div className={clsx(
                            "w-6 h-6 rounded-md flex items-center justify-center transition-all duration-300 border shadow-[0_0_10px_rgba(0,0,0,0.5)]",
                            isProducer
                                ? "bg-white border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                : "bg-white/5 border-white/10 group-hover:border-white/30"
                        )}>
                            <Check className={clsx("w-3.5 h-3.5 text-black transition-transform duration-200", isProducer ? "scale-100" : "scale-0")} strokeWidth={4} />
                        </div>
                        <input
                            type="checkbox"
                            className="hidden"
                            checked={isProducer}
                            onChange={(e) => setIsProducer(e.target.checked)}
                        />
                        <span className={clsx("text-sm transition-colors duration-300", isProducer ? "text-white font-medium" : "text-white/60 group-hover:text-white/80")}>
                            I'm an Ethereal Techno Producer
                        </span>
                    </label>

                    <label className="flex items-center gap-4 cursor-pointer group relative">
                        <div className={clsx(
                            "w-6 h-6 rounded-md flex items-center justify-center transition-all duration-300 border shadow-[0_0_10px_rgba(0,0,0,0.5)]",
                            isFan
                                ? "bg-white border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                : "bg-white/5 border-white/10 group-hover:border-white/30"
                        )}>
                            <Check className={clsx("w-3.5 h-3.5 text-black transition-transform duration-200", isFan ? "scale-100" : "scale-0")} strokeWidth={4} />
                        </div>
                        <input
                            type="checkbox"
                            className="hidden"
                            checked={isFan}
                            onChange={(e) => setIsFan(e.target.checked)}
                        />
                        <span className={clsx("text-sm transition-colors duration-300", isFan ? "text-white font-medium" : "text-white/60 group-hover:text-white/80")}>
                            I'm here for the music
                        </span>
                    </label>
                </div>

                <div className="flex flex-col gap-2 group">
                    <label className="text-xs font-medium text-white/50 ml-1 uppercase tracking-wider group-focus-within:text-white/90 transition-colors">Email address</label>
                    <div className="relative">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            required
                            className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-white/40 focus:border-white/40 focus:bg-white/10 transition-all duration-300 shadow-inner"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="w-full py-4 rounded-xl bg-linear-to-r from-white to-gray-200 text-black font-bold text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {status === "loading" ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : status === "success" ? (
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5" />
                            <span>Subscribed</span>
                        </div>
                    ) : (
                        "Join the waitlist"
                    )}
                </button>

                {message && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={clsx(
                            "text-center text-xs font-medium tracking-wide",
                            status === "error" ? "text-red-400" : "text-emerald-400"
                        )}
                    >
                        {message}
                    </motion.p>
                )}
            </form>
        </motion.div>
    );
}
