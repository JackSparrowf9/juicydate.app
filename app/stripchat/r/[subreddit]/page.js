"use client";
import { CONFIG } from "@/lib/config";
import { redirect } from "next/navigation";

export default function Page({ params }) {
  const { subreddit } = params;
  const url = CONFIG.stripchat.LINKING_CODES.TopModelRoom_SignUpPop({
    campaign: "RedditGuy",
    source: subreddit,
  });
  redirect(url);
}
