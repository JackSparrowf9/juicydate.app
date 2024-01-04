"use client";
import { CONFIG } from "@/lib/config";
import { redirect } from "next/navigation";

export default function ChaturbateRoom({ params }) {
  const { username } = params;
  const url = CONFIG.chaturbate.LINKING_CODES.JoinPage_To_Room({
    track: "RedditGuy",
    room: username,
  });
  redirect(url);
}
