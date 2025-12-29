import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const apiKey = process.env.BREVO_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: "BREVO_API_KEY is not defined" },
                { status: 500 }
            );
        }

        const body = await req.json();
        const { email, type, attributes } = body; 

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        const listId = type === "artist" ? 20 : 21;

        const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: {
                "api-key": apiKey,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                email,
                listIds: [listId],
                updateEnabled: true, 
                attributes: attributes || {},
            }),
        });

        const data = await brevoRes.json();

        if (!brevoRes.ok) {
            console.error("Brevo API Error:", data);
            return NextResponse.json(
                { error: data.message || "Failed to create/update contact" },
                { status: brevoRes.status }
            );
        }

        return NextResponse.json(
            {
                success: true,
                listId,
                contact: data,
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
