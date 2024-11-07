
export default function CtaButton() {
    function openSignUp() {
        window.open('https://app.chimptok.com/register')
    }

    return (
        <button onClick={openSignUp} className="mt-6 w-80 font-extrabold text-black bg-gradient-to-r
         from-yellow-200 to-yellow-500 hover:from-yellow-200 hover:to-yellow-300 border border-1 border-yellow-400 
         py-4 px-6 rounded-md shadow-lg">START NOW</button>
    ) 
}