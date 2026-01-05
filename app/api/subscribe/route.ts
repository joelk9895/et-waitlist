import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const apiKey = process.env.BREVO_API_KEY;
        const proxyToken = process.env.PROXY_TOKEN; // Ensure this is defined

        if (!apiKey || !proxyToken) {
            return NextResponse.json(
                { error: "Configuration error: Missing API Key or Proxy Token" },
                { status: 500 }
            );
        }

        const body = await req.json();
        const { email, attributes } = body;

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        // 1. Determine Lists
        const listIds: number[] = [];
        const isProducer = attributes?.IS_PRODUCER;
        const isFan = attributes?.IS_FAN;

        if (isProducer) listIds.push(20);
        if (isFan) listIds.push(21);
        if (listIds.length === 0) listIds.push(21); // Default to Fan

        // 2. Add/Update Contact via Proxy
        const contactUrl = "https://proxy.etherealtechno.com/v3/contacts";
        const contactRes = await fetch(contactUrl, {
            method: "POST",
            headers: {
                "api-key": apiKey,
                "X-Proxy-Token": proxyToken,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                email,
                listIds: listIds,
                updateEnabled: true,
                attributes: attributes || {},
            }),
        });

        let contactData = null;
        if (contactRes.status !== 204) {
            const text = await contactRes.text();
            try { contactData = JSON.parse(text); } catch (e) { contactData = { message: text }; }
        }

        if (!contactRes.ok) {
            console.error("Brevo Contact Error:", contactData);
            return NextResponse.json(
                { error: contactData?.message || "Failed to save contact" },
                { status: contactRes.status }
            );
        }


        const sender = { name: "Ethereal Techno", email: "noreply@etherealtechno.com" };
        const subject = "You're on the waitlist!";
        const logoUrl = "https://ethereal-misc.s3.eu-west-1.amazonaws.com/Ethereal-Techno-Logo.png";

        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <body style="margin: 0; padding: 0; background-color: #111111;">
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #111111; width: 100%;">
                    <tr>
                        <td align="center" style="padding: 40px 20px;">
                            <table role="presentation" style="max-width: 600px; width: 100%; text-align: left; font-family: Arial, sans-serif; color: #ffffff;">
                                <tr>
                                    <td>
                                        <img src="${logoUrl}" alt="Ethereal Techno" width="150" style="display: block; margin-bottom: 30px;" />
                                        
                                        <h1 style="font-size: 32px; font-weight: bold; margin-bottom: 20px; color: #ffffff;">You're on the waitlist!</h1>
                                        
                                        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px; color: #e5e5e5;">
                                            You have successfully joined the waitlist for Ethereal Techno.
                                        </p>
                                        
                                        <p style="font-size: 16px; line-height: 1.5; color: #e5e5e5;">
                                            We’ll keep you posted with updates as we approach early access. Stay tuned!
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
        `;

        const emailUrl = "https://proxy.etherealtechno.com/v3/smtp/email";

        const emailRes = await fetch(emailUrl, {
            method: "POST",
            headers: {
                "api-key": apiKey,
                "X-Proxy-Token": proxyToken,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                sender,
                to: [{ email }],
                subject,
                htmlContent,
                tags: ["welcome-email"],
            }),
        });

        if (!emailRes.ok) {
            const errText = await emailRes.text();
            console.error("Failed to send welcome email:", errText);
        }

        return NextResponse.json(
            {
                success: true,
                listIds,
                contact: contactData,
                emailSent: emailRes.ok
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Internal Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
