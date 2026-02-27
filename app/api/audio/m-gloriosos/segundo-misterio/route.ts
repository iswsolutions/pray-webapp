import { NextRequest, NextResponse } from "next/server";

const BLOB_URL = "https://bqjbdtbgbpaqrlau.private.blob.vercel-storage.com/Segundo%20M%20Glorioso.mp3";

export async function GET(request: NextRequest) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;

  if (!token) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const fetchHeaders: HeadersInit = {
    Authorization: `Bearer ${token}`,
  };

  const range = request.headers.get("range");
  if (range) {
    fetchHeaders["Range"] = range;
  }

  const response = await fetch(BLOB_URL, { headers: fetchHeaders });

  if (!response.ok && response.status !== 206) {
    return new NextResponse("Audio not found", { status: 404 });
  }

  const responseHeaders: HeadersInit = {
    "Content-Type": "audio/mpeg",
    "Accept-Ranges": "bytes",
    "Cache-Control": "no-store",
  };

  const contentRange = response.headers.get("Content-Range");
  const contentLength = response.headers.get("Content-Length");
  if (contentRange) responseHeaders["Content-Range"] = contentRange;
  if (contentLength) responseHeaders["Content-Length"] = contentLength;

  return new NextResponse(response.body, {
    status: response.status,
    headers: responseHeaders,
  });
}
