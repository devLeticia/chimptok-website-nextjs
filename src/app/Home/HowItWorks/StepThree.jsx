import Image from 'next/image';
import CtaButton from './../../components/CtaButton';

export default function StepThree () {
    return (
        <div className="relative w-full flex flex-col items-center text-center gap-16">
        <div className='flex flex-col gap-6'>
          <h1 className="w-full font-barlow text-8xl text-black font-black leading-none"><span style={{  verticalAlign: 'middle' }} className='text-5xl'># </span> 
            <span className='italic'>3</span>
          </h1>
          <h1 className="font-barlow text-5xl text-black font-black leading-none uppercase">Keep Track of Your Progress<br className='hidden md:flex'/> with Insightful Reports.</h1>
          <div className="font-semibold text-zinc-500 text-2xl">
            <p >{`Dive into detailed reports to see your progress.`}</p>
            <p >{`Refine your approach and stay ahead of the game!`}</p>
          </div>
        </div>
        <div className='relative'>
            <Image src="/Flag.svg" alt="Seal Check" width={110} height={100} className="absolute -left-16 -bottom-8 z-10"  />
            <Image src="/Trophy.svg" alt="Seal Check" width={110} height={100} className="absolute left-0 -bottom-12 -mt-6 z-10"  />
          <div className="relative flex flex-col items-center justify-center bg-zinc-100 shadow-2xl rounded-2xl overflow-clip border border-1 p-6 border-gray-300 md:p-16 z-0">
          <div className="overflow-hidden -mb-6 md:-mb-16 ">
            <Image src="/img/steps/StepThree.svg" className="-mb-16" alt="Seal Check" width={756} height={350} />
          </div>
        </div>
          
        </div>
      <CtaButton />
      </div>
    )

}