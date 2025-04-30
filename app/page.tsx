"use client";

import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import React, { useState, useEffect, useRef } from "react";
import { toPng } from "html-to-image";
import { Button } from "@/components/ui/button";
import path from "path"

const GOOGLE_SHEET_ID = "1-yWUzJyKXn-QybvrVk94aiMx_HUOCfulsgyELuuSpMM";

export default function HomePage() {
  const [shortId, setShortId] = useState<string | null>(null);
  const [data, setData] = useState<any[][]>([]);
  const [doctorName, setDoctorName] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [rsm, setRsm] = useState("");
  const [hq, setHq] = useState("");
  const [so, setSo] = useState("");
  const [scale, setScale] = useState(800)
  const [type, setType] = useState<"QR" | "Sticker">("QR")
  const divRef = useRef<HTMLDivElement>(null);


  // C:\Users\ACER.DESKTOP-6NN1MUF\Downloads\Ajanta Pharma\QR Code Based Google Review Page\RSM\HQ\SO\Doctor 

  const handleDownload = async () => {
    if (!divRef.current) return;

    // const dataUrl = await toPng(divRef.current,{cacheBust : true});

    // console.log(divRef.current)

    try {
      const dataUrl = await toPng(divRef.current);
  
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          base64Image: dataUrl,
          doctorName,
          type: type === "QR" ? "QR" : "sticker",
          RSM : rsm,
          HQ : hq,
          SO : so,
        }),
      });

      const data = (await res.json())
  
      console.log(data.filePath)
      alert(data.filePath);

      window.location.reload()
    } catch (error) {
      console.error("Failed to save image:", error);
    }

    // const link = document.createElement("a");
    // link.download = `${doctorName}-${type === "QR" ? "QR" : "sticker"}.png`;
    // link.href = dataUrl;
    // link.click();
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
      {(shortId && type === "QR") ? (
        (
          <div className="relative h-full w-full">
            <div
              style={{ marginTop: "2rem" }}
              className="flex items-center flex-col justify-center "
            >
              <div
                className="flex items-center relative justify-center w-[300px] h-[300px] md:w-[700px] md:h-[700px]"
                ref={divRef}
              >
                <Image
                  src={"/Aquasoft 5 star Final.png"}
                  alt="template"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
                <p className="top-6 md:top-12 absolute md:text-4xl text-xl font-semibold">
                  {doctorName || "hello"}
                </p>
                <p className="bottom-6 md:bottom-12 absolute md:text-4xl text-xl font-semibold">
                  {clinicName || "hello"}
                </p>
                <div className="absolute">
                  <QRCodeSVG
                    value={shortUrl}
                    title={doctorName || "Title"}
                    size={scale < 800 ? 175 : 410}
                    bgColor={"#ffffff"}
                    fgColor={"#000000"}
                    level={"H"}
                    imageSettings={{
                      src: "/star.png",
                      x: undefined,
                      y: undefined,
                      height: scale < 800 ? 40 : 70,
                      width: scale < 800 ? 40 : 70,
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
        )
      ) : shortId && type === "Sticker" ? (
        (
          <div className="relative h-full w-full">
            <div
              style={{ marginTop: "2rem" }}
              className="flex items-center flex-col justify-center"
            >
              <div
                className="flex items-center relative justify-center w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-white"
                ref={divRef}
              >
                <Image
                  src={"/pngimg.com - square_PNG39.png"}
                  alt="template"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
                <p className="top-6 md:top-17 right-15.5 absolute md:text-4xl text-xl font-semibold text-center bg-[#e7c85f] w-[82%] px-9.5 ">
                  {doctorName || "hello"}
                </p>
                <p className="bottom-6 md:bottom-14 text-center right-15.5 absolute md:text-4xl text-xl font-semibold bg-[#e7c85f] w-[82%] px-9.5 ">
                  {clinicName || "Clinic Name"}
                </p>
                <div className="absolute mt-3">
                  <QRCodeSVG
                    value={shortUrl}
                    title={doctorName || "Title"}
                    size={scale < 800 ? 175 : 480}
                    bgColor={"#ffffff"}
                    fgColor={"#000000"}
                    level={type === "Sticker" ? "L" : "H"}
                    imageSettings={{
                      src: "/star.png",
                      x: undefined,
                      y: undefined,
                      height: scale < 800 ? 40 : 80,
                      width: scale < 800 ? 40 : 80,
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
        )
      )
    : (
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
                <th className="border p-2">
                  Sticker Button</th>
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
                                setType("QR");
                                setRsm(row[1]);
                                setHq(row[3])
                                setSo(row[2])
                            }}
                          >
                            generate QR Code
                          </Button>
                        </td>
                      )}
                      {cellIndex === 10 && (
                        <td className="p-2 border text-center">
                          <Button
                            className="rounded-lg bg-green-600 truncate px-3 cursor-pointer hover:bg-green-800"
                            onClick={(e) => {
                              setDoctorName(row[4]),
                                setClinicName(row[7]),
                                handleSubmit(row[8], row[4], row[7]);
                                setType("Sticker")
                                setRsm(row[1]);
                                setHq(row[3])
                                setSo(row[2])
                            }}
                          >
                            generate Sticker
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
    )
    }
    </main>
  );
}
