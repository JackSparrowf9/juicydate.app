"use client";
import { CONFIG } from "@/lib/config";
import { redirect } from "next/navigation";

export default function Redirect() {
  const url = CONFIG.stripchat.LINKING_CODES.JoinPage({
    campaign: "RedditGuy",
    source: "subreddit",
  });
  redirect(url);
}
