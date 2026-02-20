import { NextResponse } from "next/server";

const BLOB_URL = "https://bqjbdtbgbpaqrlau.private.blob.vercel-storage.com/Padre%20Nuestro.mp3";

export async function GET() {
  const token = process.env.BLOB_READ_WRITE_TOKEN;

  if (!token) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const response = await fetch(BLOB_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return new NextResponse("Audio not found", { status: 404 });
  }

  const audioBuffer = await response.arrayBuffer();

  return new NextResponse(audioBuffer, {
    status: 200,
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "no-store",
    },
  });
}
