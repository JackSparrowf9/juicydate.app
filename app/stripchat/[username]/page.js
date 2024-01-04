"use client";
import { CONFIG } from "@/lib/config";
import { redirect } from "next/navigation";

export default function StripChatRoom({ params }) {
  const { username } = params;
  const url = CONFIG.stripchat.LINKING_CODES.ModelRoom_SignUpPop({
    campaign: "xlivesex",
    model: username,
  });
  redirect(url);
}
