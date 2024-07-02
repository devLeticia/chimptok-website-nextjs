import Image from 'next/image';

export default function StepTwo () {
    return (
    <div className=" flex gap-6 relative my-12">        
        <div className="flex flex-col gap-12 w-full items-center justify-center text-center">
          <div className='flex flex-col gap-6 '>
            <h1 className="w-full font-display text-5xl text-black font-black leading-none uppercase">2. use time tracker for daily consistency.</h1>
            <p className="font-semibold text-zinc-500 text-lg">Stay on track with our time tracker, turning routines into habits. Consistency is your new superpower!</p>
          </div>
          <Image src="/img/steps/StepTwo.svg" alt="Seal Check" width={800} height={800} className="-z-10 -mt-24 -mb-16"/>
        </div>
    </div>
    )
}