import Image from 'next/image';

export default function StepThree () {
    return (
    <div className="w-full flex gap-6 items-top justify-center relative my-12">
        <Image src="/Flag.svg" alt="Seal Check" width={110} height={100} className="absolute right-6 -bottom-12"  />
        <Image src="/Trophy.svg" alt="Seal Check" width={110} height={100} className="absolute -right-6 -bottom-12  -mt-6"  />
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start  md:text-left text-center w-full mt-6 gap-12 bg-zinc-100 p-12  rounded-2xl shadow-sm  overflow-hidden border border-1 border-gray-300">
            <div className='flex flex-col gap-6 max-w-96'>
                <h1 className="w-full font-display text-5xl text-black font-black">3. KEEP TRACK OF YOUR PROGRESS WITH INSIGHTFUL REPORTS</h1>
                <p className="font-semibold text-zinc-500">Dive into detailed reports to see your progress. Refine your approach and stay ahead of the game!</p>
            </div>
            <Image src="/img/steps/StepThree.svg" alt="Seal Check" width={600} height={600} className="w-full md:w-1/2  -mb-16 rounded-lg"/>
        </div>
    </div>
    )
}