import Image from 'next/image';
export default function Intro() {
    return (
        <div className="flex flex-col  items-center justify-center gap-12 text-gray-950 w-full mt-24 rounded-2xl"
        style={{ minHeight: 'calc(80vh)'}}
        >
          <Image src="/background/leaves_2.svg" width={400} height={100} className="absolute top-28 -left-4 rotate-12" priority />
          <div style={{ fontSize: "9rem" }} className="leading-none font-barlow  w-full flex flex-col items-center justify-center font-black">
            <h1 className="-mt-6 relative">{`IT'S TIME TO`}
              <Image src="/Timer.svg" alt="Seal Check" width={90} height={90} className="absolute top-24 left-52 right-0 -mt-6" priority />
            </h1>
            <h1 className="-mt-6">{`GET THINGS`}</h1>
            <h1 className="-mt-6 relative">{`DONE!`}
              <Image src="/SealCheck.svg" alt="Seal Check" width={100} height={100} className="absolute top-0 -right-16 -mt-6" priority />
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 ">
            <Image src="/Arm.svg" alt="chimp hand" width={750} height={750} className='absolute left-0 mt-16' priority/>
            <h1 className="font-barlow text-2xl font-black">SET, WORK, ACHIEVE!</h1>
            <p className="font-semibold  text-xl text-zinc-600">It’s Easier to Reach your Goals with Chimptok</p>
            <button className="mt-6 font-extrabold text-black bg-gradient-to-r from-yellow-200 to-yellow-500 hover:from-yellow-200 hover:to-yellow-300 border border-1 border-yellow-400 py-4 px-6 w-full rounded-md shadow-lg">START NOW</button>
          </div>
          <Image src="/background/leaves.svg" width={400} height={100} className="absolute bottom-0 -right-20" priority />
        </div>
    )    
}