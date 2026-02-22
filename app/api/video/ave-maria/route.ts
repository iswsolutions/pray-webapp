import { NextRequest, NextResponse } from "next/server";

const BLOB_URL =
  "https://bqjbdtbgbpaqrlau.private.blob.vercel-storage.com/Ave%20Maria%20-%20video.mp4";

export async function GET(request: NextRequest) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;

  if (!token) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const blobHeaders: HeadersInit = {
    Authorization: `Bearer ${token}`,
  };

  const rangeHeader = request.headers.get("range");
  if (rangeHeader) {
    blobHeaders["Range"] = rangeHeader;
  }

  const response = await fetch(BLOB_URL, { headers: blobHeaders });

  if (!response.ok && response.status !== 206) {
    return new NextResponse("Video not found", { status: 404 });
  }

  const responseHeaders: HeadersInit = {
    "Content-Type": "video/mp4",
    "Cache-Control": "no-store",
    "Accept-Ranges": "bytes",
  };

  const contentRange = response.headers.get("content-range");
  const contentLength = response.headers.get("content-length");
  if (contentRange) responseHeaders["Content-Range"] = contentRange;
  if (contentLength) responseHeaders["Content-Length"] = contentLength;

  const videoBuffer = await response.arrayBuffer();

  return new NextResponse(videoBuffer, {
    status: response.status,
    headers: responseHeaders,
  });
}
