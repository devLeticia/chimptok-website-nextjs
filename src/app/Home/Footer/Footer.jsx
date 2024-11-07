import { InstagramLogo, TwitterLogo} from '@phosphor-icons/react'
import Image from 'next/image';
import URL from '../../../app/urls.json'

export default function Footer () {
    return (
    <footer className='flex flex-col justify-between text-sm font-medium bg-[#FADE7E] min-h-[460px] w-full py-16  px-6 md:px-32 rounded-t-3xl -mb-20 text-gray-900 '>
        <div className='flex justify-between pb-6 px-2 md:px-12 border-b border-yellow-950 border-opacity-30'>
        <Image src="/ChimptokLogotype.svg" alt="ChimptokLogoType" width={140} height={140} className="hover:cursor-pointer" />
        <div className='flex gap-x-6'>
            <a href={URL.instagram} target="_blank" rel="noopener noreferrer"className="cursor-pointer text-gray-900  hover:text-gray-950">
                <InstagramLogo  size={24}  weight="fill" />
            </a>
            <a href={URL.twitter} target="_blank" rel="noopener noreferrer"className="cursor-pointer text-gray-900 hover:text-gray-950">
                <TwitterLogo size={24}  weight="fill"  />
            </a>
            <a href="#" className=" hover:text-gray-950 font-bold">
                About
            </a>
            <a href="#" className=" hover:text-gray-950 font-bold">
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
            <p className='md:text-right'>Designed and Developed by <a className='font-bold hover:text-gray-950' href="https://www.leticiagoncalves.dev" >Leticia</a></p>
            <p className='md:text-right'>Inspired by <a className='font-bold hover:text-gray-950' href="https://app.rocketseat.com.br/">Rocketseat</a></p>
            </div>
        </div>
            <p className='text-center mt-12'>© 2024 Chimptok All Rights Reserved</p>
        </div>
  </footer>
    )
}