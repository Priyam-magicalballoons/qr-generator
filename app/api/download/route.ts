import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { base64Image, doctorName, type,RSM,HQ,SO } = await req.json();

    function sanitizeFilename(name: string): string {
        return name.replace(/[^a-z0-9_\-\.]/gi, '_'); // Replace anything not alphanumeric, dash, underscore, or dot
      }

    const downloadsPath = path.join(
      process.env.HOME || process.env.USERPROFILE || "",
      "Downloads",
      "Ajanta-Pharma",
      "QR Code Based Google Review Page",
      `RSM - ${RSM}`,
      `HQ - ${HQ}`,
      `SO - ${SO}`,
      `Doctor - ${doctorName}`,
    );

    
    fs.mkdirSync(downloadsPath, { recursive: true });

    // Remove prefix from base64
    const base64Data = base64Image.replace(/^data:image\/png;base64,/, "");

    console.log("now",downloadsPath)

    const filename = `${sanitizeFilename(doctorName)}-${type}.png`;
    const filePath = path.join(downloadsPath, filename);

    fs.writeFileSync(filePath, base64Data, "base64");

    return NextResponse.json({
        filePath
    })
  } catch (error) {
    console.error(error);
    return new Response("Error saving file", { status: 500 });
  }
}
