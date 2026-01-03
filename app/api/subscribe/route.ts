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
        const { email, attributes } = body;

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        const listIds: number[] = [];
        if (attributes?.IS_PRODUCER) listIds.push(20);
        if (attributes?.IS_FAN) listIds.push(21);

        if (listIds.length === 0) listIds.push(21);

        const brevoRes = await fetch("https://proxy.etherealtechno.com/v3/contacts", {
            method: "POST",
            headers: {
                "api-key": apiKey,
                "X-Proxy-Token": process.env.PROXY_TOKEN!,
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

        if (brevoRes.status === 204) {
            return NextResponse.json(
                { success: true, listIds, contact: null },
                { status: 200 }
            );
        }

        const text = await brevoRes.text();
        let data;
        try {
            data = text ? JSON.parse(text) : {};
        } catch (e) {
            console.error("Failed to parse Brevo response:", text);
            data = { message: text };
        }

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
                listIds,
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
