import Image from "next/image";
import Link from "next/link";

import { getDomain } from "./utils";

export default async function Home() {
  const domain = await getDomain();
  let cpaLink = `${domain}/?utm_source=da57dc555e50572d&s1=54794&s2=1962503&s3=meetnfuck&s5=homePage&ban=twitter&j1=1`;

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-15'>
      <div className='fixed top-10 left-0 flex h-48 w-full items-end justify-center'>
        <Image src='/18.webp' alt='18+ logo' width={100} height={24} priority />
      </div>
      <h1 className='text-4xl font-semibold py-2'>Age Verification</h1>
      <p className='pb-8 font-light'>Are you at least 18 years old?</p>
      <Link href={cpaLink}>
        <button className='flex justify-center items-center p-4 border-2 rounded border-red-900 bg-red-700 w-[250px] font-semibold'>
          YES
        </button>
      </Link>
    </main>
  );
}
