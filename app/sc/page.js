// this route for stripchat redirect on twitter
"use client";
import { CONFIG } from "@/lib/config";
import { redirect } from "next/navigation";

export default function Redirect() {
  const url = CONFIG.stripchat.LINKING_CODES.TopModelRoom_SignUpPop({
    campaign: "Twitter",
    source: "twitter",
  });
  redirect(url);
}
