'use client';
import { InstagramLogo, TiktokLogo, TwitterLogo, GithubLogo, MediumLogo, FigmaLogo, Star } from '@phosphor-icons/react'
import Image from 'next/image';
import URL from './urls.json';

export default function Home() {
  
  function openLogin() {
    window.open('https://app.chimptok.com/', '_blank')
  }
  
  function openSignUp() {
    window.open('https://app.chimptok.com/',  '_blank')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 font-body">
        <nav className="fixed w-full z-50 bg-gray-100 border border-1 border-gray-300 rounded-full shadow-sm flex items-center justify-between px-12 py-3 mx-auto max-w-screen-xl">
            <div className="flex items-center">
                <div className="text-lg font-bold"><Image src="/ChimptokLogotype.svg" alt="ChimptokLogoType" width={140} height={140} className="hover:cursor-pointer" /></div>
            </div>
            <div className="flex items-center space-x-12"> 
                 {/* social media links */}
                <div className="flex items-center space-x-4">
                  <a href={URL.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600  hover:text-gray-900">
                      <InstagramLogo  size={24}  weight="fill" />
                  </a>
                  <a href={URL.twitter} target="_blank" rel="noopener noreferrer"  className="text-gray-600 hover:text-gray-900">
                      <TwitterLogo size={24}  weight="fill"  />
                  </a>
                </div>
                <div  className="flex items-center space-x-4">
                {/* website links */}
                  <a href="#about" className="text-gray-600 hover:text-gray-900 font-bold">
                      About
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 font-bold">
                      Blog
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <button onClick={openLogin} className="min-w-40 border-2 border-zinc-950 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold px-4 py-1 rounded focus:outline-none focus:shadow-outline bg-dark">
                      Join
                  </button>
                  <button onClick={openSignUp} className="min-w-40  border-2 border-zinc-950 bg-white hover:bg-gray-200 font-semibold px-4 py-1 rounded focus:outline-none focus:shadow-outline">
                      Log In
                  </button>
                </div>
            </div>
        </nav>
        <div className="flex flex-col items-center justify-center gap-12">
          <div style={{ fontSize: "9rem" }} className="leading-none pt-40 w-full flex flex-col items-center justify-center font-display font-black">
            <h1 className="-mt-6 relative">ITS TIME TO
              <Image src="/Timer.svg" alt="Seal Check" width={90} height={90} className="absolute top-24 left-52 right-0 -mt-6"  />
            </h1>
            <h1 className="-mt-6">GET THINGS</h1>
            <h1 className="-mt-6 relative">DONE!
              <Image src="/SealCheck.svg" alt="Seal Check" width={100} height={100} className="absolute top-0 -right-16 -mt-6"  />
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 ">
            <Image src="/Arm.svg" alt="chimp hand" width={750} height={750} className='absolute left-0 mt-16'/>
            <h1 className="font-display text-2xl font-black italic">SET, WORK, ACHIEVE!</h1>
            <p className="font-semibold text-zinc-600">It’s Easier to Reach your Goals with Chimp :)</p>
            <button className="mt-6 font-extrabold text-zinc-900 bg-gradient-to-r from-yellow-200 to-yellow-500 hover:from-yellow-200 hover:to-yellow-300 border border-1 border-yellow-400 py-4 px-6 w-full rounded-md shadow-lg">START NOW</button>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center text-center items-center gap-12 bg-white py-24 my-6">
        <div className='flex flex-col items-center gap-6'>
          <div className='flex gap-2'>
            <Star size={24} style={{ stroke: '#facc15', strokeWidth: 12 }}  weight="fill" className='text-amber-300'/>
            <Star size={24} style={{ stroke: '#facc15', strokeWidth: 12 }}  weight="fill" className='text-amber-300'/>
            <Star size={24} style={{ stroke: '#facc15', strokeWidth: 12 }}  weight="fill" className='text-amber-300'/>
            <Star size={24} style={{ stroke: '#facc15', strokeWidth: 12 }}  weight="fill" className='text-amber-300'/>
            <Star size={24} style={{ stroke: '#facc15', strokeWidth: 12 }}  weight="fill" className='text-amber-300'/>
          </div>
        <h1 className="font-display text-2xl font-black uppercase">Champions Who Trust Us</h1>
        
        </div>
        <div className="w-full flex items-center align-center justify-center gap-x-12">
          <Image src="/img/companies/TimeBandits.svg" alt="TimeBandits" width={200} height={200} className="hover:cursor-pointer" />
          <Image src="/img/companies/ProcrastinationPunishers.svg" alt="ProcrastinationPunishers" width={140} height={140} className="hover:cursor-pointer" />
          <Image src="/img/companies/FocusFreaks.svg" alt="FocusFreaks" width={200} height={200} className="hover:cursor-pointer" />
          <Image src="/img/companies/DreamAchievers.svg" alt="DreamAchievers" width={160} height={160} className="hover:cursor-pointer" />
        </div>
        </div>
        <div className="py-12 flex flex-col w-full justify-center items-center gap-16 max-w-[1600] ">
          <div className='flex flex-col items-center text-center gap-8' style={{ maxWidth: '600px'}}>
            
            <h1 className="font-display text-5xl font-black"  id='about'>HOW IT WORKS</h1>
            <p className="font-semibold text-zinc-500 ">
            Your ultimate platform to set goals, create routines, and track your progress. See where youre excelling and where you can improve with our insightful reports. Lets smash those goals together!
            </p>
            </div>
            <div className=" flex gap-6 items-top justify-center relative">
               <Image src="/Target.svg" alt="Seal Check" width={80} height={80} className="absolute left-6 -top-6 right-0"  />
                <Image src="/Calendar.svg" alt="Seal Check" width={90} height={90} className="absolute -left-6 top-12 right-0 -mt-6"  />
              <div className="flex  mt-6 gap-12  bg-zinc-100 p-12 w-full rounded-2xl shadow-sm  overflow-hidden border border-1 border-gray-300">
                <div className='flex flex-col gap-6 max-w-80 relative'>
                  <h1 className="w-full font-display text-3xl text-zinc-900 font-black leading-none mt-12"><span className='text-5xl rotate-2'>1.</span> SET GOALS & TASKS TO CREATE A KILLER ROUTINE!</h1>
                  <p className="font-semibold text-zinc-500">Chimps got your back, setting deadlines and daily time targets for each goal.</p>
                </div>
                  {/* <Image src="/ArrowDown.svg" alt="Seal Check" width={10} height={10} className="absolute left-1/4  -bottom-32 overflow-visible"/> */}
                  <Image src="/img/steps/StepOne.svg" alt="Seal Check" width={450} height={450} className="-mb-16 rounded-lg  shadow-xl"/>
              </div>
            </div>
            <div className=" flex gap-6 relative my-12">
              
              <div className="flex flex-col gap-12 w-full">
                <div className='flex flex-col gap-6 max-w-80'>
                  <h1 className="w-full font-display text-3xl text-zinc-900 font-black leading-none uppercase"><span className='text-5xl rotate-2'>2.</span> use time tracker for daily consistency...</h1>
                  <p className="font-semibold text-zinc-500">Stay on track with our time tracker, turning routines into habits. Consistency is your new superpower!</p>
                </div>
                <Image src="/img/steps/StepTwo.svg" alt="Seal Check" width={800} height={800} className="-mt-44 -mb-16"/>
              </div>
            </div>
            <div className=" flex gap-6 items-top justify-center relative my-12">
            {/* <Image src="/ArrowDown.svg" alt="Seal Check" width={10} height={10} className="absolute right-1/4  -top-40 overflow-visible"/> */}
                <Image src="/Flag.svg" alt="Seal Check" width={100} height={100} className="absolute right-6 -bottom-6"  />
                <Image src="/Trophy.svg" alt="Seal Check" width={100} height={100} className="absolute -right-6 -bottom-3  -mt-6"  />
              <div className="flex  mt-6 gap-12  bg-zinc-100 p-12 w-full rounded-2xl shadow-sm  overflow-hidden border border-1 border-gray-300">
                  <Image src="/img/steps/StepThree.svg" alt="Seal Check" width={450} height={450} className="-mb-16 rounded-lg"/>
                <div className='flex flex-col gap-6 max-w-80 relative'>
                  <h1 className="w-full font-display text-3xl text-zinc-900 font-black leading-none"><span className='text-5xl rotate-2'>3.</span> KEEP TRACK OF YOUR PROGRESS WITH INSIGHTFUL REPORTS</h1>
                  <p className="font-semibold text-zinc-500">Dive into detailed reports to see your progress. Refine your approach and stay ahead of the game!</p>
                </div>
              </div>
            </div>
            {/* <div className="max-w-[1600] grid grid-cols-1 gap-6 items-center justify-center">
              <div className="w-full flex flex-col text-center gap-6 bg-zinc-100 p-12 w-full bg-white rounded-md shadow-sm border border-1 border-gray-300 ">
                <h1 className="w-full font-display px-12 text-3xl font-black italic leading-none">SET GOALS & TASKS<br/> TO CREATE A ROUTINE</h1>
                <p className="font-medium text-sm text-zinc-700">Chimps got your back, setting deadlines and <br/> daily time targets for each goal. Lets make every moment count!</p>
              </div>
            </div> */}
        </div>
        <div className='text-center  items-center flex flex-col gap-6 my-12'>
          <h1 className="font-display text-center text-6xl font-black">THATS IT! <br/>QUIT THE SCROLLING,<br/>START THE ACTION!</h1>
          <p className="font-semibold text-zinc-500">The tours over, friend! Dont waste another second procrastinating.<br/>
          Lets get you signed up on Chimptok and on your way to achieving those dreams!</p>
          <button className="mt-6 text-zinc-900 bg-gradient-to-r from-yellow-200 to-yellow-500 hover:from-yellow-200 hover:to-yellow-300 border border-1 border-yellow-400 font-extrabold py-4 px-32 rounded-md shadow-lg mr-6">START NOW</button>
        </div>

        <div className="max-w-[1200px]   rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-950 my-32 relative">
          <div className="w-full  p-10 grid grid-cols-2 gap-3  bg-[url('/transparent-zebra-pattern.svg')]">
              <div className="flex flex-col gap-12 justify-center items-center ">
              <Image src="/Foot.svg" alt="chimp hand" width={300} height={100} className='absolute  top-0'/>
              </div>
              <div className="flex flex-col gap-6 justify-between">
              
                  <h1 className="max-w-[500px] w-full text-white font-display text-5xl font-black  leading-none uppercase">DONT LIE TO YOURSELF, thinking youll start next Monday.</h1>
                  <p className="font-semibold text-zinc-400">Take the first step to start making immediate progress!</p>
                  <button className="text-zinc-900 bg-gradient-to-r from-yellow-200 to-yellow-500 hover:from-yellow-200 
                   hover:to-yellow-300 border border-1 border-yellow-400 font-extrabold py-4 px-6 w-full rounded-md shadow-lg uppercase">Start Now</button>
              </div>
          </div>
          </div>

          <footer className='flex flex-col justify-between text-sm font-medium bg-[#FADE7E] min-h-[460px] w-full py-16 px-32 rounded-t-3xl -mb-20'>
            <div className='flex justify-between pb-6 px-12 border-b border-yellow-950 border-opacity-30'>
              <Image src="/ChimptokLogotype.svg" alt="ChimptokLogoType" width={140} height={140} className="hover:cursor-pointer" />
              <div className='flex gap-x-6'>
                 <a href={URL.instagram} target="_blank" rel="noopener noreferrer"className="text-gray-900  hover:text-gray-950">
                      <InstagramLogo  size={24}  weight="fill" />
                  </a>
                  <a href={URL.twitter} target="_blank" rel="noopener noreferrer"className="text-gray-900 hover:text-gray-950">
                      <TwitterLogo size={24}  weight="fill"  />
                  </a>
                  <a href="#" className="text-gray-900 hover:text-gray-950 font-bold">
                      About
                  </a>
                  <a href="#" className="text-gray-900 hover:text-gray-950 font-bold">
                      Blog
                  </a>
              </div>
            </div>
            <div>
            <div className='flex justify-between gap-6'>
              <div className='flex flex-col gap-2'>
                {/* <p>Know How Chimptok was Built</p>
                <div className='flex items-center gap-6'>
                  <div className='flex gap-2 items-center'>
                    <a href="#" className="text-gray-900  hover:text-gray-950 relative">
                          <GithubLogo  size={24}  weight="fill" /> 
                    </a>
                    <p>Github</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <a href="#" className="text-gray-900  hover:text-gray-950 relative">
                          <MediumLogo  size={24}  weight="fill" /> 
                    </a>
                    <p>Medium</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <a href="#" className="text-gray-900  hover:text-gray-950 relative">
                          <FigmaLogo  size={24}  weight="fill" /> 
                    </a>
                    <p>Figma</p>
                  </div>
                </div> */}
              </div>
                <div>
                  <p className='text-right'>Designed and Developed by <a className='font-bold'href="#" >Leticia</a></p>
                  <p className='text-right'>Inspired by <a className='font-bold'href="#">Rocketseat</a> and <a className='font-bold'href="#">IxDF</a></p>
                </div>
            </div>
                <p className='text-center mt-12'>Chimptok All Rights Reserved  2024</p>
                </div>
          </footer>
    </main>
  );
}
