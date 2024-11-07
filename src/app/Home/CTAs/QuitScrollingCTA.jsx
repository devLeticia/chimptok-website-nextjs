
export default function QuitScrollingCTA() {
    function openSignUp() {
        window.open('https://app.chimptok.com/register')
    }

    return (
        <div className='text-center  items-center flex flex-col gap-6 my-12'>
            <h1 className="font-barlow text-center text-6xl font-black text-black">{`THAT'S IT!`}<br/>{`QUIT THE SCROLLING,`}<br/>{`START THE ACTION!`}</h1>
            <p className="font-semibold text-zinc-500  text-lg">The tours over, friend! Dont waste another second procrastinating.<br/>
            Lets get you signed up on Chimptok and on your way to achieving those dreams!</p>
            <button onClick={openSignUp} className="mt-6 text-black bg-gradient-to-r from-yellow-200 to-yellow-500 hover:from-yellow-200 hover:to-yellow-300 border border-1 border-yellow-400 font-extrabold py-4 px-32 rounded-md shadow-lg mr-6">START NOW</button>
        </div>
    ) 
}