// this route for stripchat redirect on twitter
"use client";
import { CONFIG } from "@/lib/config";
import { redirect } from "next/navigation";

export default function Page({ params }) {
  const { username } = params;
  let track = `Twitter_${username}`;
  const url = CONFIG.chaturbate.LINKING_CODES.JoinPage_To_Female(
    track.toString()
  );

  redirect(url);
}
