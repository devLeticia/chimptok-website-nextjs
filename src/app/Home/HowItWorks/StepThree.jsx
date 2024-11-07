import Image from 'next/image';

export default function StepThree () {
    return (
        <div className="relative w-full flex flex-col items-center text-center gap-16">
        <div className='flex flex-col gap-6'>
          <h1 className="w-full font-barlow text-8xl text-black font-black leading-none"><span style={{  verticalAlign: 'middle' }} className='text-5xl'># </span> 
            <span className='italic'>3</span>
          </h1>
          <h1 className="font-barlow text-5xl text-black font-black leading-none ">Keep Track of Your Progress<br/> with Insightful Reports.</h1>
          <p className="font-semibold text-zinc-500 text-xl">{`Dive into detailed reports to see your progress. Refine your approach and stay ahead of the game!`}</p>
          
        </div>
        <div className="relative flex flex-col items-center justify-center bg-zinc-100 shadow-2xl rounded-2xl  border border-1 border-gray-300 p-16">
        <Image src="/Flag.svg" alt="Seal Check" width={110} height={100} className="absolute -left-16 -bottom-8"  />
        <Image src="/Trophy.svg" alt="Seal Check" width={110} height={100} className="absolute left-0 -bottom-12  -mt-6"  />
        <div className="overflow-hidden -mb-16 ">
          <Image src="/img/steps/StepThree.svg" className="-mb-16" alt="Seal Check" width={756} height={350} />
        </div>
      </div>
      </div>
    )

}