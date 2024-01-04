// this route for chaturbate redirect on twitter
// this route for stripchat redirect on twitter
"use client";
import { CONFIG } from "@/lib/config";
import { redirect } from "next/navigation";

export default function Redirect() {
  const url = CONFIG.chaturbate.LINKING_CODES.JoinPage_To_Female("Twitter");
  redirect(url);
}
