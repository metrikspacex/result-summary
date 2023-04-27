import { NextResponse } from "next/server";

import data from "@/content/results.json";

export async function GET() {
  return NextResponse.json(data);
}
