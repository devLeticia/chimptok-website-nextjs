import { Star } from '@phosphor-icons/react'
import Image from 'next/image';

export default function Ratings () {
    const stars = Array(5).fill(null); 
    return (
    <div className="w-full flex flex-col justify-center text-center items-center gap-12 mt-72 mb-36">
        <div className='flex flex-col items-center gap-6 w-full absolute bg-gradient-to-r from-slate-950 to-gray-950  py-24'>
          <div className='flex gap-2'>
          {stars.map((_, index) => (
            <Star
              key={index}
              size={24}
              style={{ stroke: '#f3d45a', strokeWidth: 12 }}
              weight="fill"
              className='text-amber-300'
            />
          ))}
          </div>
        <h1 className="font-display text-3xl text-white font-black uppercase">Champions Who Trust Us</h1>
        
        <div className="w-full flex items-center align-center justify-center gap-x-12 mt-12">
          <Image src="/img/companies/TimeBandits.svg" alt="TimeBandits" width={200} height={200} className="hover:cursor-pointer" />
          <Image src="/img/companies/ProcrastinationPunishers.svg" alt="ProcrastinationPunishers" width={140} height={140} className="hover:cursor-pointer" />
          <Image src="/img/companies/FocusFreaks.svg" alt="FocusFreaks" width={200} height={200} className="hover:cursor-pointer" />
          <Image src="/img/companies/DreamAchievers.svg" alt="DreamAchievers" width={160} height={160} className="hover:cursor-pointer" />
        </div>
        </div>
      </div>
    )
}