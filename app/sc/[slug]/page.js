"use client";
import { CONFIG } from "@/lib/config";
import { redirect } from "next/navigation";

export default function ChaturbateRoom({ params }) {
  const { slug } = params;
  const url = CONFIG.stripchat.LINKING_CODES.TopModelRoom_SignUpPop({
    campaign: "Twitter",
    source: slug,
  });
  redirect(url);
}
