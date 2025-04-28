import { NextRequest, NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { saveUrl } from '@/lib/urlStore';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const { longUrl,doctorName,clinicName } = await req.json();

  console.log(doctorName,clinicName)

  if (!longUrl || typeof longUrl !== 'string') {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
  }

  
  const id = nanoid(10);

  const checkExistance = await prisma.shortener.findFirst({
    where : {
      longUrl : longUrl
    }
  })

  if(checkExistance){
    return NextResponse.json({ id : checkExistance.shortUrl});
  }

  saveUrl(id, longUrl);
  const create = await prisma.shortener.create({
    data : {
      longUrl,
      shortUrl : id,
      clinicName : clinicName,
      doctorName : doctorName
    }
  })

  return NextResponse.json({ id });
}
