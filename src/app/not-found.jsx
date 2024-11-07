"use client";
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  
  return (
    <div  className="flex flex-col gap-6 items-center justify-center h-screen bg-black">
      <h1 className="font-jakarta font-extrabold  text-7xl text-white" >404</h1>
      <p className='font-barlow text-white text-9xl font-bold'>{`Whoops!`}</p>
      <div className='font-jakarta text-white text-2xl font-medium text-center'>
        <p>{`You’ve gone off the map.`}</p>
        <p>{`Even Chimp couldn’t find this page.`}</p>
      </div>
      <button onClick={() => router.push('/')}  className="font-jakarta  mt-6 text-black bg-gradient-to-r from-yellow-200 to-yellow-500 hover:from-yellow-200 hover:to-yellow-300 border border-1 border-yellow-400 font-extrabold py-4 px-32 rounded-md shadow-lg mr-6">Take me back</button>
    </div>
  );
}