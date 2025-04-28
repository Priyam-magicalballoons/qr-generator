"use client";

import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { useState, FormEvent, useEffect, useRef } from "react";
import { toPng, toSvg, toJpeg } from "html-to-image";
import download from "downloadjs";

const GOOGLE_SHEET_ID = "1-yWUzJyKXn-QybvrVk94aiMx_HUOCfulsgyELuuSpMM";

export default function HomePage() {
  // const [longUrl, setLongUrl] = useState('');
  const [shortId, setShortId] = useState<string | null>(null);
  const [data, setData] = useState<any[][]>([]);
  const [doctorName, setDoctorName] = useState("");
  const [clinicName, setClinicName] = useState("");
  const divRef = useRef<HTMLDivElement>(null);
  const handleDownload = async () => {
    if (!divRef.current) return;

    const dataUrl = await toPng(divRef.current);

    const link = document.createElement("a");
    link.download = "div-image.png";
    link.href = dataUrl;
    link.click();
  };
  const handleSubmit = async (longUrl: string,doctor:string,clinic:string) => {
    const res = await fetch("https://qr-generator-nine-tau.vercel.app/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ longUrl,doctorName : doctor,clinicName  : clinic}),
    });

    if (res.ok) {
      const data = await res.json();
      setShortId(data.id);
    } else {
      alert("Failed to shorten URL");
    }
  };

  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const shortUrl = shortId ? `https://qr-generator-nine-tau.vercel.app/api/${shortId}` : "";
  const qrUrl = shortId ? `/api/qr/${shortId}` : "";

  useEffect(() => {
    const fetchSheet = async () => {
      const res = await fetch(
        `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json`
      );
      const text = await res.text();
      const json = JSON.parse(text.substr(47).slice(0, -2)); // Google sends weird padding
      const rows = json.table.rows.map((row: any) =>
        row.c.map((cell: any) => (cell ? cell.v : ""))
      );
      setData(rows);
    };

    fetchSheet();
  }, []);

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


  return (
    <main
      style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}
      className="h-screen"
    >
      {shortId ? (
        <div className="relative h-full w-full">
          <div
            style={{ marginTop: "2rem" }}
            className="flex items-center justify-center "
          >
            <div
              className="flex items-center relative justify-center w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
              ref={divRef}
            >
              <Image
                src={"/t.png"}
                alt="template"
                fill
                className=""
              />
              <p className="top-14 absolute text-4xl font-semibold">
                {doctorName || "hello"}
              </p>
              <p className="bottom-14 absolute text-4xl font-semibold">
                {clinicName || "hello"}
              </p>
              <div className="absolute">
                <QRCodeSVG
                  value={shortUrl}
                  title={doctorName || "Title"}
                  size={320}
                  bgColor={"#ffffff"}
                  fgColor={"#000000"}
                  level={"H"}
                  imageSettings={{
                    src: "https://res.cloudinary.com/db9gdpyyv/image/upload/v1745587816/star_wzre3w.png",
                    x: undefined,
                    y: undefined,
                    height: 70,
                    width: 70,
                    opacity: 1,
                    excavate: true,
                  }}
                />
              </div>
            </div>
            <div className="absolute bottom-15 flex flex-row gap-10">
              <button
                className="py-2 px-4 rounded-xl bg-red-500 text-white font-semibold cursor-pointer"
                onClick={() => setShortId("")}
              >
                Go back
              </button>
              <button
                className="py-2 px-4 rounded-xl bg-green-500 text-white font-semibold cursor-pointer"
                onClick={handleDownload}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Google Sheet Data</h2>
          <table border={1} className="px-5">
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="border">
                  {row.map((cell: any, cellIndex: number) => (
                    <>
                      <td
                        key={cellIndex}
                        className={`border px-2 truncate ${
                          cellIndex === 8 && "max-w-10"
                        } ${cellIndex === 9 && "max-w-10"} ${
                          cellIndex > 9 && "hidden"
                        }`}
                      >
                        {" "}
                        <a href={cell}>{cell}</a>
                      </td>
                      {cellIndex === 9 && (
                        <td className="p-2">
                          <button
                            className="rounded-lg bg-green-600 truncate px-3 py-1 cursor-pointer"
                            onClick={(e) => {
                              setDoctorName(row[4]),
                                setClinicName(row[7]),
                                handleSubmit(cell,row[4],row[7]);
                            }}
                          >
                            generate QR Code
                          </button>
                        </td>
                      )}
                    </>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
