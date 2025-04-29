"use client";

import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import React, { useState, useEffect, useRef } from "react";
import { toPng } from "html-to-image";
import { Button } from "@/components/ui/button";

const GOOGLE_SHEET_ID = "1-yWUzJyKXn-QybvrVk94aiMx_HUOCfulsgyELuuSpMM";

export default function HomePage() {
  const [shortId, setShortId] = useState<string | null>(null);
  const [data, setData] = useState<any[][]>([]);
  const [doctorName, setDoctorName] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [scale, setScale] = useState(800)
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

  useEffect(()=>{
    setScale(window.innerWidth)
  },[scale])

  return (
    <main
      style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}
      className="h-screen"
    >
      {shortId ? (
        <div className="relative h-full w-full">
          <div
            style={{ marginTop: "2rem" }}
            className="flex items-center flex-col justify-center "
          >
            <div
              className="flex items-center relative justify-center w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
              ref={divRef}
            >
              <Image
                src={"/Aquasoft 5 star Final.png"}
                alt="template"
                layout="fill"
                objectFit="cover"
                priority={true}
              />
              <p className="top-6 md:top-11 absolute md:text-4xl text-xl font-semibold">
                {doctorName || "hello"}
              </p>
              <p className="bottom-6 md:bottom-11 absolute md:text-4xl text-xl font-semibold">
                {clinicName || "hello"}
              </p>
              <div className="absolute">
                <QRCodeSVG
                  value={shortUrl}
                  title={doctorName || "Title"}
                  size={scale < 800 ? 160 : 350}
                  bgColor={"#ffffff"}
                  fgColor={"#000000"}
                  level={"H"}
                  imageSettings={{
                    src: "/star.png",
                    x: undefined,
                    y: undefined,
                    height: scale < 800 ? 50 : 70,
                    width: scale < 800 ? 50 : 70,
                    excavate: true,
                  }}
                />
              </div>
            </div>
            <div className="relative -bottom-5 flex flex-row gap-10">
              <Button
                className="py-2 px-4 rounded-xl bg-red-500 text-white font-semibold cursor-pointer hover:bg-red-700"
                onClick={() => setShortId("")}
              >
                Go back
              </Button>
              <Button
                className="py-2 px-4 rounded-xl bg-green-500 text-white font-semibold cursor-pointer hover:bg-green-700"
                onClick={handleDownload}
              >
                Download
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full w-full flex flex-col px-2">
          <h2 className="text-center font-semibold text-xl pb-5">Google Sheet Data</h2>
          <table className="px-5">
            <thead>
              <tr>
                <th className="border p-2">Sr No</th>
                <th className="border p-2">RSM Name</th>
                <th className="border p-2">Dr. Name</th>
                <th className="border p-2">Place</th>
                <th className="border p-2">Mobile No.</th>
                <th className="border p-2">Clinic Name</th>
                <th className="border p-2">Google Page Link</th>
                <th className="border p-2">Review Page Link</th>
                <th className="border p-2">QR Button</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="border">
                  {row.map((cell: any, cellIndex: number) => (
                    <>
                      <td
                        key={cellIndex}
                        className={`border px-2 truncate text-center ${
                          (cellIndex > 7 || cellIndex === 2 || cellIndex === 3) && "hidden"
                        }`}
                      >
                        <p className="truncate">{cell}</p>
                      </td>
                      {cellIndex === 7 && (
                        <td className="px-2 text-center">
                          <a href={row[9]} className="text-blue-500 truncate">
                            Clinic link
                          </a>
                        </td>
                      )}
                      {cellIndex === 8 && (
                        <td className="px-2 border text-center">
                          <a className="text-blue-500 truncate" href={row[8]}>
                            Clinic review link
                          </a>
                        </td>
                      )}
                      {cellIndex === 9 && (
                        <td className="p-2 text-center">
                          <Button
                            className="rounded-lg bg-green-600 truncate px-3 cursor-pointer hover:bg-green-800"
                            onClick={(e) => {
                              setDoctorName(row[4]),
                                setClinicName(row[7]),
                                handleSubmit(row[8], row[4], row[7]);
                            }}
                          >
                            generate QR Code
                          </Button>
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
