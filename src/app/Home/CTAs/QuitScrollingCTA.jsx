
import { Siren } from '@phosphor-icons/react';
import CtaButton from './../../components/CtaButton';
export default function QuitScrollingCTA() {
    function openSignUp() {
        window.open('https://app.chimptok.com/signup')
    }

    return (
        <div className='text-center  items-center flex flex-col gap-6 my-12'>
            <Siren size={46} weight="duotone" />
            <h1 className="font-barlow text-center text-6xl font-black text-black">{`THAT'S IT!`}<br/>{`QUIT THE SCROLLING,`}<br/>{`START THE ACTION!`}</h1>
            <p className="font-semibold text-zinc-500  text-lg">The tours over, friend! Dont waste another second procrastinating.<br/>
            Lets get you signed up on Chimptok and on your way to achieving those dreams!</p>
            <CtaButton />
        </div>
    ) 
}