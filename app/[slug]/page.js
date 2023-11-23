import Image from "next/image";
import Link from "next/link";
import { promises as fs } from "fs";

export default async function Page({ params }) {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-15'>
      <div className='fixed top-10 left-0 flex h-48 w-full items-end justify-center'>
        <Image src='/18.webp' alt='18+ logo' width={100} height={24} priority />
      </div>
      <h1 className='text-4xl font-semibold py-2'>Age Verification</h1>
      <p className='pb-8 font-light'>Are you at least 18 years old?</p>
      <Link href={`${data.slugPage}${params.slug}${data.rest}`}>
        <button className='flex justify-center items-center p-4 border-2  rounded bg-red-700 w-[250px] font-semibold'>
          YES
        </button>
      </Link>
    </main>
  );
}
