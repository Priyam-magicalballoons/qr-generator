"use client";

import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { useState, useEffect, useRef } from "react";
import { toPng } from "html-to-image";

const GOOGLE_SHEET_ID = "1-yWUzJyKXn-QybvrVk94aiMx_HUOCfulsgyELuuSpMM";

export default function HomePage() {
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

  const handleSubmit = async (longUrl: string, doctor: string, clinic: string) => {
    const res = await fetch("/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ longUrl, doctorName: doctor, clinicName: clinic }),
    });

    if (res.ok) {
      const data = await res.json();
      setShortId(data.id);
    } else {
      alert("Failed to shorten URL");
    }
  };
  const shortUrl = shortId ? `https://qr-generator-nine-tau.vercel.app/api/${shortId}` : "";

  useEffect(() => {
    const fetchSheet = async () => {
      const res = await fetch(
        `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json`
      );
      const text = await res.text();
      const json = JSON.parse(text.substr(47).slice(0, -2));
      const rows = json.table.rows.map((row: any) =>
        row.c.map((cell: any) => (cell ? cell.v : ""))
      );
      setData(rows);
    };

    fetchSheet();
  }, []);

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
                layout="fill"
                objectFit="cover"
                priority={true}
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
          <button>Export as excel</button>
          <table border={1} className="px-5">
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="border">
                  {row.map((cell: any, cellIndex: number) => (
                    <>
                      <td
                        key={cellIndex}
                        className={`border px-2 truncate ${
                          cellIndex > 7 && "hidden"
                        }`}
                      >
                        {" "}
                        <p className="truncate">{cell}</p>
                      </td>
                      {cellIndex === 7 && (
                        <td className="p-3">
                          <a href={row[9]} className="text-blue-500 truncate">
                            Clinic link
                          </a>
                        </td>
                      )}
                      {cellIndex === 8 && (
                        <td className="p-2 border">
                          <a className="text-blue-500 truncate" href={row[8]}>
                            Clinic review link
                          </a>
                        </td>
                      )}
                      {cellIndex === 9 && (
                        <td className="p-2">
                          <button
                            className="rounded-lg bg-green-600 truncate px-3 py-1 cursor-pointer"
                            onClick={(e) => {
                              setDoctorName(row[4]),
                                setClinicName(row[7]),
                                handleSubmit(row[8], row[4], row[7]);
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
