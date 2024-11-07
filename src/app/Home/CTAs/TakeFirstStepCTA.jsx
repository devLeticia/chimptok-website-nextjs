import Image from 'next/image'

export default function TakeFirstStep () {
  function openSignUp() {
    window.open('https://app.chimptok.com/register')
  }

    return (
        <div className="w-full rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-950 relative my-32">
          <div className="w-full  p-10 flex flex-col md:flex-row gap-3  bg-[url('/transparent-zebra-pattern.svg')]">
              <div className="flex flex-col gap-12 justify-center items-center w-full md:w-full">
              <div className="absolute top-0">
            <div className="block md:hidden">
              <Image src="/Foot.svg" alt="chimp hand" width={240} height={100} />
            </div>
            <div className="hidden md:block">
              <Image src="/Foot.svg" alt="chimp hand" width={380} height={150} />
            </div>
          </div>
              </div>
              <div className="flex flex-col gap-6 justify-between w-full mt-36 md:mt-0">
                  <h1 className="max-w-[500px] w-full text-white font-barlow text-5xl font-black  leading-none uppercase">{`DON'T LIE TO YOURSELF, thinking youll start next Monday.`}</h1>
                  <p className="font-semibold text-zinc-400">Take the first step to start making immediate progress!</p>
                  <button onClick={openSignUp} className="text-black bg-gradient-to-r from-yellow-200 to-yellow-500 hover:from-yellow-200 
                   hover:to-yellow-300 border border-1 border-yellow-400 font-extrabold py-4 px-6 w-full rounded-md shadow-lg uppercase">Start Now</button>
              </div>
            </div>
        </div>
    )
}