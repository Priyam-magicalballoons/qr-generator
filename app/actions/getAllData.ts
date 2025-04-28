"use server"
import prisma from "@/lib/prisma"

export async function getAllScans(name:string,password:string){
    if(name !== "admin" && password !== "admin"){
        return {
            status : 400,
            message : "Invalid Credentials"
        }
    }
   try {
    const data =  await prisma.shortener.findMany({
        where : {},
        select : {
            clinicName : true,
            doctorName : true,
            scannedCounts : true
        }
       },)
       return {
        status : 200,
        data
       }
   } catch (error) {
        return {
            status : 500,
            message : "Internal server error"
        }
   }
}