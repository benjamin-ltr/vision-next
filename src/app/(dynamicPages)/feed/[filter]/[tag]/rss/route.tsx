import { NextRequest } from "next/server";
import { FeedRssHandler } from "@/features/rss";

interface Props {
  params: { filter: string; tag: string };
}

export async function GET(request: NextRequest, { params: { filter, tag } }: Props) {
  return new Response(
    (await new FeedRssHandler(request.nextUrl.pathname, filter, tag).getFeed()).xml(),
    { headers: { "Content-Type": "text/xml" } }
  );
}