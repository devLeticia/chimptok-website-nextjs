import Image from 'next/image';

export default function StepTwo () {
    return (
      <div className="relative w-full flex flex-col items-center text-center gap-16">
      <div className='flex flex-col gap-6'>
        <h1 className="w-full font-barlow text-8xl text-black font-black leading-none"><span style={{  verticalAlign: 'middle' }} className='text-5xl'># </span> 
          <span className='italic'>2</span>
        </h1>
        <h1 className="font-barlow text-5xl text-black font-black leading-none ">Use Time Tracker  <br/>for Daily Consistency</h1>
        <p className="font-semibold text-zinc-500 text-xl">{`Stay on track with our time tracker, turning routines into habits. Consistency is your new superpower!`}</p>
        
      </div>
      <div className="relative flex flex-col items-center justify-center bg-zinc-100 shadow-2xl rounded-2xl  border border-1 border-gray-300 p-16">
      <Image src="/Target.svg" alt="Seal Check" width={100} height={80} className="absolute right-2 -top-6 " />
      <Image src="/Calendar.svg" alt="Seal Check" width={100} height={90} className="absolute  top-16 -right-12 -mt-6" />
      <div className="overflow-hidden -mb-16 ">
        <Image src="/img/steps/StepTwo.svg" className="-mb-16" alt="Seal Check" width={540} height={350} />
      </div>
    </div>
    </div>
    )
}