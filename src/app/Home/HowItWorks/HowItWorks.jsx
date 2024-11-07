import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

export default function HowItWorks () {
    return (
      <div className="gap-56 flex flex-col w-full justify-center items-center max-w-[1600] mt-52">
        <div className='flex flex-col items-center text-center gap-8' style={{ maxWidth: '600px'}}>     
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