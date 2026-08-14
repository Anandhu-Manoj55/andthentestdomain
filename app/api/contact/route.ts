import { NextRequest, NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      destinations,
      experiences,
      travelDates,
      groupSize,
      budget,
      message,
    } = body;

    // --- Server-side validation ---
    if (!firstName?.trim() || !lastName?.trim()) {
      return NextResponse.json({ error: "First and last name are required." }, { status: 400 });
    }
    if (!email?.trim()) {
      return NextResponse.json({ error: "Email address is required." }, { status: 400 });
    }
    // Basic email pattern check on server
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    // --- Google Sheets ---
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    if (!sheetId || !clientEmail || !privateKey) {
      console.error("Missing Google Sheets environment variables.");
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    const auth = new JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(sheetId, auth);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    // Ensure header row exists (will only add if sheet is empty)
    try {
      await sheet.loadHeaderRow();
    } catch {
      await sheet.setHeaderRow([
        "Timestamp",
        "First Name",
        "Last Name",
        "Email",
        "Phone",
        "Destinations",
        "Experiences",
        "Travel Dates",
        "Group Size",
        "Budget",
        "Message",
      ]);
    }

    await sheet.addRow({
      Timestamp: new Date().toISOString(),
      "First Name": firstName.trim(),
      "Last Name": lastName.trim(),
      Email: email.trim(),
      Phone: phone?.trim() || "",
      Destinations: Array.isArray(destinations) ? destinations.join(", ") : "",
      Experiences: Array.isArray(experiences) ? experiences.join(", ") : "",
      "Travel Dates": travelDates?.trim() || "",
      "Group Size": groupSize?.trim() || "",
      Budget: budget?.trim() || "",
      Message: message?.trim() || "",
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
