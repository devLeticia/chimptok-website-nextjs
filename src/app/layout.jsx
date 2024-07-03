import { Barlow_Semi_Condensed, Plus_Jakarta_Sans} from 'next/font/google'
import "./globals.css";


const barlow = Barlow_Semi_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['200', '300', '400', '500', '600', '700', '800']
})


export const metadata = {
  title: "Chimptok",
  description: "Your best tool to set and reach goals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <script src="https://unpkg.com/@phosphor-icons/web" async></script>
        {/* this '0' script solves the FOUC issue https://github.com/vercel/next.js/issues/13058 */}
        <script async>0</script>
      </head> 
      <body className={`${jakarta.variable} ${barlow.variable} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
