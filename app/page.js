import Image from "next/image";
import Link from "next/link";

import { CONFIG } from "@/lib/config";

export default function Home() {
  let chaturbate = CONFIG.chaturbate.LINKING_CODES.JoinPage_To_Female();
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-15'>
      <div className='fixed top-10 left-0 flex h-48 w-full items-end justify-center'>
        <Image src='/18.webp' alt='18+ logo' width={100} height={24} priority />
      </div>
      <h1 className='text-4xl font-semibold py-2'>Age Verification</h1>
      <p className='pb-8 font-light'>Are you at least 18 years old?</p>
      <Link href={chaturbate}>
        <button className='flex justify-center items-center p-4 border-2 rounded border-red-900 bg-red-700 w-[250px] font-semibold'>
          YES
        </button>
      </Link>
    </main>
  );
}
