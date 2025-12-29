import Link from "next/link";
import Header from "../components/Header";

export default function Terms() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
            <Header />
            <div className="max-w-3xl mx-auto px-8 py-32 space-y-12">
                <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-anton uppercase tracking-wide">Terms of Service</h1>
                    <p className="text-white/50 text-sm">
                        Effective Date: January 1, 2026
                    </p>
                </div>

                <div className="space-y-8 text-white/80 leading-relaxed font-light">
                    <p className="text-lg text-white">
                        By joining or using Ethereal Techno, you agree to these terms. We may update them as the
                        platform evolves. Please read them carefully.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using Ethereal Techno, you agree to be bound by these Terms of Service and our
                            Privacy Policy. If you do not agree, please do not use the platform.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">2. Description of Service</h2>
                        <p>
                            Ethereal Techno is a platform and creative hub for electronic music producers and fans, focused
                            on the Ethereal Techno genre. It offers access to exclusive content, sample libraries, collaborative
                            tools, and community features. Certain features may be offered in beta or early-access form.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">3. User Accounts and Responsibilities</h2>
                        <ul className="list-disc pl-5 space-y-1 text-white/70 marker:text-white/50">
                            <li>You must provide accurate and truthful information when signing up</li>
                            <li>You are responsible for maintaining the security of your account and all activity under it</li>
                            <li>You must not share your account credentials with others</li>
                            <li>You must be at least 13 years old to use the platform</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">4. Acceptable Use</h2>
                        <p>You agree not to:</p>
                        <ul className="list-disc pl-5 space-y-1 text-white/70 marker:text-white/50">
                            <li>Misuse or interfere with the service</li>
                            <li>Violate any laws or regulations</li>
                            <li>Infringe upon intellectual property rights</li>
                            <li>Use the service to distribute harmful, abusive, or illegal content</li>
                            <li>Attempt to gain unauthorized access to the platform or other user accounts</li>
                            <li>Use the platform for commercial purposes without written permission</li>
                            <li>Reverse engineer or tamper with any part of the service</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">5. Intellectual Property</h2>
                        <p>
                            All content, features, and branding on Ethereal Techno - including the name, logo, and visual
                            assets - are owned by us and protected by international copyright and trademark laws.
                        </p>
                        <p>
                            You retain full ownership of any original music or content you upload or create using the platform.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">6. Subscriptions and Payments</h2>
                        <p>
                            Premium features, if introduced, may be subject to subscription fees. All fees are non-refundable
                            except as required by law. Ethereal Techno reserves the right to modify pricing or service tiers
                            with prior notice.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">7. Beta Features and Availability</h2>
                        <p>
                            Beta or early-access features are offered “as-is” and may change or be removed at any time.
                            While we strive for a stable experience, we do not guarantee uninterrupted availability and may
                            perform maintenance without notice.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">8. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, Ethereal Techno shall not be liable for any indirect,
                            incidental, consequential, or punitive damages - including loss of profits, data, or goodwill -
                            arising from your use of the platform.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">9. Disclaimer of Warranties</h2>
                        <p>
                            Ethereal Techno is provided ‘as is’ and ‘as available’, without warranties of any kind, express or
                            implied. We do not guarantee that the service will be secure, error-free, or meet your expectations.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">10. Termination</h2>
                        <p>
                            We reserve the right to suspend or terminate your account at any time, without notice, for
                            violating these terms. You may also delete your account at any time via your profile settings or by
                            contacting us.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">11. Changes to Terms</h2>
                        <p>
                            We may update these Terms of Service at any time. We will notify you of major changes via email
                            or through the platform. Your continued use of the service after updates constitutes acceptance of
                            the revised terms.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">12. Governing Law</h2>
                        <p>
                            These Terms shall be governed by the laws of Germany, without regard to conflict of law
                            principles.
                        </p>
                    </section>

                    <section className="space-y-3 border-t border-white/10 pt-8 mt-8">
                        <h2 className="text-xl font-bold text-white">13. Contact Us</h2>
                        <p>
                            Ethereal Techno is operated by Christian Legno as a sole proprietor (Selbständiger) based in
                            Germany.
                        </p>
                        <div className="text-white/60 text-sm mt-4">
                            <p>Questions or concerns? Contact us at: <a href="mailto:support@etherealtechno.com" className="text-white hover:underline">support@etherealtechno.com</a></p>
                            <div className="mt-4">
                                <p className="font-bold text-white">Business Address:</p>
                                <p>Christian Legno</p>
                                <p>Dottistr. 7</p>
                                <p>10367 Berlin</p>
                                <p>Germany</p>
                            </div>
                        </div>
                    </section>
                </div>

                <Link href="/" className="inline-block pt-8 text-white/50 hover:text-white transition-colors text-sm uppercase tracking-widest">
                    ← Back to Home
                </Link>
            </div>
        </main>
    );
}