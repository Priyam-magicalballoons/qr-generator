import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "@/lib/urlStore";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  console.log(url)
  const pathSegments = url.pathname.split("/");
  const id = pathSegments[pathSegments.length - 1];
  console.log(id)
  const longUrl = await prisma.shortener.findFirst({
    where: {
      shortUrl: id,
    },
  });
  // const mapedLongUrl = getUrl(id);
  if (longUrl ) {
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
    return NextResponse.redirect(longUrl!.longUrl);
  }

  return NextResponse.json({ error: "URL not found" }, { status: 404 });
}
