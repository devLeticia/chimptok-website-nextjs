import { Barlow_Semi_Condensed, Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";

const barlow = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-barlow'
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: [ '400'],
  variable: '--font-jakarta'
});

export const metadata = {
  title: "Chimptok",
  description: "Your best tool to set and reach goals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <head>
        
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
       
        <meta property="og:title" content="Chimptok" />
        <meta property="og:description" content="Your best tool to set and reach goals" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.chimptok.com" />
        <meta property="og:image" content="/img/chimptok.png" />
        <meta property="og:chimptok" content="Chimptok" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chimptok" />
        <meta name="twitter:description" content="Your best tool to set and reach goals" />
        <meta name="twitter:image" content="/img/chimptok.png" /> 
        <meta name="twitter:site" content="@chimptok" /> 
        <meta name="twitter:image:alt" content="It's time to get things done">

        </meta>
        <link rel="icon" href="/favicon.ico" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </head>
      </head>
      <body className={`${jakarta.variable} ${barlow.variable} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
