'use client';

import Intro from './Home/Intro/Intro';
import NavBar from './Home/NavBar/NavBar';
import Ratings from './Home/Ratings/Ratings';
import HowItWorks from './Home/HowItWorks/HowItWorks';
import QuitScrollingCTA from './Home/CTAs/QuitScrollingCTA';
import TakeFirstStep from './Home/CTAs/TakeFirstStepCTA';
import Footer from './Home/Footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full py-12 flex flex-col items-center font-body">
      <div className='w-full flex flex-col items-center px-10 gap-24 overflow-visible max-w-screen-xl'>
        <NavBar/>
        <Intro/>
        <Ratings/>
        <HowItWorks />
        <QuitScrollingCTA />
        <TakeFirstStep />
      </div>
      <Footer />
    </main>
  );
}
