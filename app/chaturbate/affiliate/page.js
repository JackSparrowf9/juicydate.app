"use client";
import { CONFIG } from "@/lib/config";
import { redirect } from "next/navigation";

export default function TopModel() {
  const url = CONFIG.chaturbate.LINKING_CODES.Aff;
  redirect(url);
}
