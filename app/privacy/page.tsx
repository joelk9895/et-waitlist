import Link from "next/link";
import Header from "../components/Header";

export default function Privacy() {
    return (
        <main className="min-h-screen bg-black text-white font-sans">
            <Header />
            <div className="max-w-3xl mx-auto px-8 py-32 space-y-8">
                {/* Title Section */}
                <div>
                    <h1 className="text-4xl font-anton uppercase mb-2">Privacy Policy</h1>
                    <p className="text-white/50 text-sm">
                        Effective Date: January 1, 2026
                    </p>
                </div>

                {/* Introduction */}
                <div className="space-y-6 text-white/80 leading-relaxed font-light">
                    <p>
                        We respect your privacy. We collect only the information necessary to
                        operate the waitlist and improve the Ethereal Techno platform. We do
                        not sell your data.
                    </p>

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-xl font-bold text-white mt-8 mb-3">
                            1. Information We Collect
                        </h2>
                        <p className="mb-2">
                            When you join our waitlist or use Ethereal Techno, we may collect:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Email address</strong> - to manage the waitlist and send
                                updates
                            </li>
                            <li>
                                <strong>Name (optional)</strong> - if you provide it during
                                signup
                            </li>
                            <li>
                                <strong>Usage data and analytics</strong> - to understand how the
                                platform is used
                            </li>
                            <li>
                                <strong>Technical information</strong> - including browser type,
                                device info, and IP address, to improve security and performance
                            </li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-xl font-bold text-white mt-8 mb-3">
                            2. How We Use Your Information
                        </h2>
                        <p className="mb-2">We use your information to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Provide, improve, and personalize features and services</li>
                            <li>Send product updates, announcements, and support messages</li>
                            <li>Analyze usage patterns to optimize the platform</li>
                            <li>Detect and prevent fraud, abuse, and technical issues</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-xl font-bold text-white mt-8 mb-3">
                            3. Data Sharing and Third Parties
                        </h2>
                        <p className="mb-2">
                            We do <strong>not</strong> sell your personal information. We may
                            share limited data with trusted third-party service providers,
                            including:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>
                                <strong>Email and automation tools</strong> - to send waitlist
                                confirmations and newsletters
                            </li>
                            <li>
                                <strong>Hosting providers</strong> - to serve and store website
                                content
                            </li>
                            <li>
                                <strong>Analytics tools</strong> - to understand visitor behavior
                                and improve the site
                            </li>
                            <li>
                                <strong>Law enforcement authorities</strong> - if legally required
                                or to protect our rights
                            </li>
                        </ul>
                        <p>
                            Some data may be processed or stored outside the European Union in
                            compliance with applicable data protection laws, including GDPR.
                            Where applicable, we ensure that appropriate safeguards (such as
                            Standard Contractual Clauses) are in place.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-xl font-bold text-white mt-8 mb-3">
                            4. Data Security
                        </h2>
                        <p className="mb-2">
                            We implement industry-standard security practices, including:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>HTTPS encryption</li>
                            <li>Secure authentication for admin access</li>
                            <li>Regular monitoring of infrastructure</li>
                        </ul>
                        <p className="italic text-white/60">
                            Please note that no method of internet transmission or electronic
                            storage is 100% secure.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-xl font-bold text-white mt-8 mb-3">
                            5. Your Rights
                        </h2>
                        <p className="mb-2">You have the right to:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Access, correct, or delete your personal information</li>
                            <li>Request a copy of your data</li>
                            <li>Withdraw consent for data processing</li>
                            <li>Unsubscribe from our communications at any time</li>
                        </ul>
                        <p>
                            To exercise these rights, email us at:{" "}
                            <a
                                href="mailto:support@etherealtechno.com"
                                className="text-white underline hover:text-white/70"
                            >
                                support@etherealtechno.com
                            </a>
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-xl font-bold text-white mt-8 mb-3">
                            6. Data Retention
                        </h2>
                        <p>
                            We retain your personal information as long as necessary to operate
                            the service or until you request deletion. If you unsubscribe or
                            delete your account, your data will be removed within 30 days unless
                            we are legally required to retain it for longer (e.g. for tax,
                            accounting, or legal compliance).
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-xl font-bold text-white mt-8 mb-3">
                            7. Cookies and Tracking
                        </h2>
                        <p className="mb-2">
                            We use cookies and similar technologies for:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Website functionality</li>
                            <li>Analytics</li>
                            <li>User preferences</li>
                        </ul>
                        <p>
                            You can disable cookies through your browser settings. Note: Some
                            features may not work properly without cookies.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-xl font-bold text-white mt-8 mb-3">
                            8. Children’s Privacy
                        </h2>
                        <p>
                            Ethereal Techno is not intended for individuals under 13 years old.
                            We do not knowingly collect data from children. If we become aware
                            that a child has submitted personal data, we will delete it
                            immediately.
                        </p>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-xl font-bold text-white mt-8 mb-3">
                            9. Changes to This Policy
                        </h2>
                        <p>
                            We may update this Privacy Policy to reflect changes to our
                            practices. Significant updates will be announced via email or on the
                            platform.
                        </p>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-xl font-bold text-white mt-8 mb-3">
                            10. Contact Us
                        </h2>
                        <div className="space-y-4">
                            <p>
                                Ethereal Techno is operated by Christian Legno as a sole
                                proprietor (Selbständiger) based in Germany.
                            </p>
                            <p>
                                Questions or concerns? Contact us at:{" "}
                                <a
                                    href="mailto:support@etherealtechno.com"
                                    className="text-white underline hover:text-white/70"
                                >
                                    support@etherealtechno.com
                                </a>
                            </p>
                            <div className="mt-4 p-4 border border-white/10 rounded-lg bg-white/5 inline-block">
                                <p className="font-semibold text-white">Business Address:</p>
                                <address className="not-italic mt-2 text-white/70">
                                    Christian Legno<br />
                                    Dottistr. 7<br />
                                    10367 Berlin<br />
                                    Germany
                                </address>
                            </div>
                        </div>
                    </section>
                </div>

                <Link
                    href="/"
                    className="inline-block mt-8 text-white/50 hover:text-white transition-colors"
                >
                    ← Back to Home
                </Link>
            </div>
        </main>
    );
}