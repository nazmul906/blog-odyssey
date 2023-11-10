import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// this is serverside
// this api will fetch category data from mongodb via prisma
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    // console.log("Catgry", categories);
    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
