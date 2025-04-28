import { NextRequest, NextResponse } from 'next/server';
import { getUrl } from '@/lib/urlStore';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const longUrl = await prisma.shortener.findFirst({
    where : {
      shortUrl : params.id
    }
  })
  const mapedLongUrl = getUrl(params.id)
  if (longUrl || mapedLongUrl) {
    await prisma.shortener.updateMany({
      where : {
        shortUrl : params.id
      },
      data : {
        scannedCounts : {
          increment : 1
        }
      }
    })
    return NextResponse.redirect(mapedLongUrl ?? longUrl!.longUrl);
  }

  return NextResponse.json({ error: 'URL not found' }, { status: 404 });
}
