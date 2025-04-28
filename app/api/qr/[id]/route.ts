// import { getUrl } from '@/lib/urlStore';
// import QRCode from 'qrcode';
// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
//   const longUrl = getUrl(params.id);
//   if (!longUrl) {
//     return new NextResponse('Invalid QR ID', { status: 404 });
//   }

//   const qrUrl = `http://192.168.1.18:3000/api/${params.id}`;
//   const qrDataUrl = await QRCode.toDataURL(qrUrl);
//   const base64Data = qrDataUrl.split(',')[1];
//   const imgBuffer = Buffer.from(base64Data, 'base64');

//   return new NextResponse(imgBuffer, {
//     headers: {
//       'Content-Type': 'image/png',
//       'Content-Length': imgBuffer.length.toString(),
//     },
//   });
// }
