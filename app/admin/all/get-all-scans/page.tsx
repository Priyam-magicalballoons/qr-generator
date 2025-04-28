"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { getAllScans } from "@/app/actions/getAllData";
import * as XLSX from "xlsx";

const page = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allData, setAllData] = useState<any[]>([])
  const tableRef = useRef<HTMLTableElement>(null);

  const handleSubmit = async () => {
    if(!name || !password){
        return toast("kindly fill all the fields")
    }
    if(name === "admin" && password === "admin"){
        toast("Logged in successfully")
        setIsLoggedIn(true)
        const data = await getAllScans(name,password)
        setAllData(data?.data!)
        
    }else{
        toast("Invalid credentials")
    }
  }
  const exportToExcel = () => {
      if (!tableRef.current) return;
  
      const ws = XLSX.utils.table_to_sheet(tableRef.current); // Convert table to sheet
      const wb = XLSX.utils.book_new(); // Create a new workbook
  
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1"); // Append the sheet to the workbook
      XLSX.writeFile(wb, "table_data.xlsx"); // Export the file
    };
  return (
    <div className="h-screen w-full">
      {!isLoggedIn ? (
        <div className="h-full w-full items-center justify-center flex">
          <Card className="w-[350px] shadow-lg">
            <CardHeader>
              <CardTitle>Admin Login</CardTitle>
              <CardDescription>
                Enter your credentials to see the data.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name your name" value={name} onChange={(e)=>setName(e.target.value)} />
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end w-full items-center">
              <Button onClick={handleSubmit}>Submit</Button>
            </CardFooter>
          </Card>
        </div>
      ) : (
        <div className="h-full w-full p-10 flex flex-col  items-center">
            <div className="w-full py-5 justify-end flex">
                <Button onClick={exportToExcel}>
                    Export to excel
                </Button>
            </div>
            {
                    <table ref={tableRef} cellPadding={5} cellSpacing={10} border={1} className="border px-5 w-full md:w-1/3 lg:w-1/2">
                        <thead className="border">
                <tr>
                    <th className="border">Doctor Name</th>
                    <th className="border">Clinic Name</th>
                    <th className="border px-5">Scans</th>
                </tr>
                        </thead>
                {
                    allData?.map((data,index)=>(
                        <tbody key={index}>
                        <tr>
                            <td className="px-3 border text-center">{data.doctorName}</td>
                            <td className="px-3 border text-center">{data.clinicName}</td>
                            <td className="px-3 border text-center">{data.scannedCounts}</td>
                        </tr>
                        </tbody>
                    ))
                }
                </table>            
        }
        </div>
      )}
    </div>
  );
};

export default page;
