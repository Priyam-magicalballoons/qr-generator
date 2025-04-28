import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "@/lib/urlStore";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const pathSegments = url.pathname.split("/");
  const id = pathSegments[pathSegments.length - 1];
  const longUrl = await prisma.shortener.findFirst({
    where: {
      shortUrl: id,
    },
  });
  const mapedLongUrl = getUrl(id);
  if (longUrl || mapedLongUrl) {
    await prisma.shortener.updateMany({
      where: {
        shortUrl: id,
      },
      data: {
        scannedCounts: {
          increment: 1,
        },
      },
    });
    console.log("mapped long url",mapedLongUrl)
    console.log(" long url",longUrl)
    return NextResponse.redirect(mapedLongUrl ?? longUrl!.longUrl);
  }

  return NextResponse.json({ error: "URL not found" }, { status: 404 });
}
