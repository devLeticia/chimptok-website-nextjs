import Image from 'next/image';
import CtaButton from './../../components/CtaButton';

export default function Intro() {
    return (
        <div className="flex flex-col items-center justify-center gap-12 text-gray-950 w-full mt-24 rounded-2xl text-center"
        style={{ minHeight: 'calc(80vh)'}}
        >
          <div className='max-w-[12rem]  md:max-w-[20rem] lg:max-w-[30rem] absolute top-28 -left-4 z-0'>
            <Image src="/background/leaves_2.svg" width={400} height={100} className="rotate-12 " priority />
          </div>
            <Image src="/done.svg" alt="it's time to get things done" width={600} height={600} className="md:hidden z-10" priority />
          <div style={{ fontSize: "9rem" }} className="hidden md:flex leading-none font-barlow  w-full  flex-col items-center justify-center font-black z-10">
            <h1 className="text-[6rem] md:text-[7rem] lg:text-[9rem] -mt-6 relative">{`IT'S TIME TO`}
              <Image src="/Timer.svg" alt="Seal Check" width={90} height={90} className="absolute top-24 left-52 right-0 -mt-6" priority />
            </h1>
            <h1 className="-mt-6 text-[6rem] md:text-[7rem] lg:text-[9rem]">{`GET THINGS`}</h1>
            <h1 className="text-[6rem] md:text-[7rem] lg:text-[9rem] -mt-6 relative">{`DONE!`}
              <Image src="/SealCheck.svg" alt="Seal Check" width={100} height={100} className="absolute top-0 -right-16 -mt-6" priority />
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 ">
            {/* <Image src="/Arm.svg" alt="chimp hand" width={750} height={750} className='absolute left-0 mt-16' priority/> */}
            <h1 className="font-barlow text-2xl font-black">SET, WORK, ACHIEVE!</h1>
            <p className="font-semibold  text-xl text-zinc-600">It’s Easier to Reach your Goals with Chimptok</p>
            <CtaButton />
          </div>
          <div className='max-w-[12rem]  md:max-w-[20rem] lg:max-w-[30rem] absolute bottom-0 -right-20 z-0'>
            <Image src="/background/leaves.svg" width={400} height={100} className="" priority />
          </div>
        </div>
    )    
}