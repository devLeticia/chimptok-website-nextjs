import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Image from 'next/image';
import { Barbell, FlagBannerFold, Target } from '@phosphor-icons/react';

export default function HowItWorks () {
    return (
      <div className="gap-40 flex flex-col w-full justify-center items-center max-w-[1600] mt-36 relative">
        <Image src="/background/straight-vine.svg" alt="Seal Check" width={300} height={200} className='absolute opacity-10 -z-10 -top-96 -left-20' />
        <Image src="/background/round-vine.svg" alt="Seal Check" width={500} height={200} className='absolute opacity-10 -z-10 -top-96 left-50' />
        <Image src="/background/straight-vine.svg" alt="Seal Check" width={300} height={200} className='absolute opacity-10 -z-10 -top-96 -right-36' />
        <div className='flex flex-col items-center text-center gap-8 ' style={{ maxWidth: '600px'}}>     
        <div className='flex gap-3 mt-12'>
          <Target size={42} weight="duotone" />
          <Barbell size={42} weight="duotone" />
          <FlagBannerFold size={42} weight="duotone" />
        </div>
          <h1 className="font-barlow text-5xl font-black text-black"  id='about'>HOW IT WORKS</h1>
          <p className="font-semibold text-zinc-500 text-2xl">
          {`Chimptok is your ultimate platform to set goals, create routines, and track your progress. Let's smash those goals together!`}
          </p>
        </div>
        <StepOne />
        <StepTwo />
        <StepThree />
      </div>
    )
}