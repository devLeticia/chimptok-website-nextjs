import Image from 'next/image';

export default function StepTwo () {
    return (
      <div className="relative w-full flex flex-col items-center text-center gap-16">
      <div className='flex flex-col gap-6'>
        <h1 className="w-full font-barlow text-8xl text-black font-black leading-none"><span style={{  verticalAlign: 'middle' }} className='text-5xl'># </span> 
          <span className='italic'>2</span>
        </h1>
        <h1 className="font-barlow text-5xl text-black font-black leading-none ">Use Time Tracker  <br/>for Daily Consistency</h1>
        <div className='font-semibold text-zinc-500 text-2xl'>
        <p>{`Stay on track with our time tracker, turning routines into habits.`}</p>
        <p>{`Consistency is your new superpower!`}</p>
        </div>
        
      </div>
      <div className="relative flex flex-col items-center justify-center bg-zinc-100 shadow-2xl rounded-2xl  border border-1 border-gray-300 pt-24 px-16">
        <div className='flex absolute right-50 -top-6 '>
      <Image src="/SealCheck.svg" alt="Seal Check" width={100} height={80} className="" />
      <Image src="/Timer.svg" alt="Seal Check" width={90} height={90} className="-ml-8" />

        </div>
      <div className="overflow-hidden">
        <Image src="/img/steps/StepTwo.svg" className="-mb-2" alt="Seal Check" width={800} height={350} />
      </div>
    </div>
    </div>
    )
}