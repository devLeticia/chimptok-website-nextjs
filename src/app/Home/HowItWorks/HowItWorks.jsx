import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

export default function HowItWorks () {
    return (
        <div className="py-12 flex flex-col w-full justify-center items-center gap-16 max-w-[1600] mt-52">
        <div className='flex flex-col items-center text-center gap-8' style={{ maxWidth: '600px'}}>     
          <h1 className="font-display text-5xl font-black text-black"  id='about'>HOW IT WORKS</h1>
          <p className="font-semibold text-zinc-500 text-lg">
          Your ultimate platform to set goals, create routines, and track your progress. Lets smash those goals together!
          </p>
          </div>
          <StepOne />
          <StepTwo />
          <StepThree />
      </div>
    )
}