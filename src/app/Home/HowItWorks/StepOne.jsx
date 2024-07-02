import Image from 'next/image';

export default function StepOne () {
    return (
    <div className="relative w-full">
        <Image src="/Target.svg" alt="Seal Check" width={100} height={80} className="absolute left-6 -top-6 right-0"  />
        <Image src="/Calendar.svg" alt="Seal Check" width={100} height={90} className="absolute -left-6 top-12 right-0 -mt-6"  />
        <div className="flex flex-col md:flex-row justify-center mt-6 gap-12 bg-zinc-100 p-6 md:p-12 w-full rounded-2xl shadow-sm overflow-hidden border border-1 border-gray-300">
         <div className='flex flex-col gap-6 max-w-96 relative text-center md:text-left md:w-1/2'>
           <h1 className="w-full font-display text-5xl text-black font-black leading-none mt-12">1. SET GOALS & TASKS TO CREATE A KILLER ROUTINE!</h1>
           <p className="font-semibold text-zinc-500 text-lg">Chimps got your back, setting deadlines and daily time targets for each goal.</p>
         </div>
         <Image src="/img/steps/StepOne.svg" alt="Seal Check" width={450} height={450} className="md:w-1/2 -mb-16 rounded-lg  shadow-xl"/>
        </div>
    </div>
    )
}