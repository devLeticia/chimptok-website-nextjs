import Image from 'next/image';
import CtaButton from './../../components/CtaButton';

export default function StepOne () {
    return (
    <div className="relative w-full flex flex-col items-center text-center gap-16">
      <Image src="/background/long-vine.svg" alt="Seal Check" width={1000} height={80} className="absolute top-40 -left-60 -z-10 opacity-10" />
      <div className='flex flex-col gap-6'>
        <h1 className="w-full font-barlow text-8xl text-black font-black leading-none"><span style={{  verticalAlign: 'middle' }} className='text-5xl'># </span> 
          <span className='italic'>1</span>
        </h1>
        <h1 className="font-barlow text-5xl text-black font-black leading-none uppercase">Set Goals and Tasks <br className='hidden md:flex'/>to Create a Killer Routine!</h1>
        <p className="font-semibold text-zinc-500 text-2xl">{`Chimp's got your back, setting deadlines and daily time targets for each goal.`}</p>
      </div>
      <div className='relative z-0'>
        <Image src="/Target.svg" alt="Seal Check" width={100} height={80} className="absolute right-2 -top-6 z-10" />
        <Image src="/Calendar.svg" alt="Seal Check" width={100} height={90} className="absolute  top-16 -right-12 -mt-6 z-10" />
        <div className="relative flex flex-col items-center justify-center bg-zinc-100 shadow-2xl rounded-2xl  border border-1 border-gray-300 pt-12 px-6 md:p-16 overflow-clip">
        <div className="overflow-hidden md:-mb-16 ">
          <Image src="/img/steps/StepOne.svg" className="-mb-16" alt="Seal Check" width={640} height={350} />
        </div>
      </div>

      </div>
    <CtaButton />
    </div>
    )
}