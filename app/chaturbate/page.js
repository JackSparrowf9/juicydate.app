"use client";
import { CONFIG } from "@/lib/config";
import { redirect } from "next/navigation";

export default function Redirect() {
  redirect(CONFIG.chaturbate.LINKING_CODES.JoinPage_To_Female("RedditGuy"));
}
