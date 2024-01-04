"use client";
import { CONFIG } from "@/lib/config";
import { redirect } from "next/navigation";

export default function TopModel() {
  const url = CONFIG.chaturbate.LINKING_CODES.JoinPage_Top_Room("RedditGuy");
  redirect(url);
}
