import "./globals.css";
// import localFont from '@next/font/local'

// const geist = localFont({
//   src: [
//     {
//       path: '../public/fonts/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf',
//       weight: '400'
//     }
//   ],
//   variable: '--bricolage-geist',
//   display: "swap",
// })
// const instrumentsans = localFont({
//   src: [
//     {
//       path: '../public/fonts/InstrumentSans-VariableFont_wdth,wght.ttf',
//       weight: '400'
//     }
//   ],
//   variable: '--instrument-sans',
//   display: "swap",
// })
export const metadata = {
  title: "AEC",
  description: "Aircraft Engineering Competition",
};

export default function RootLayout({ children }) {
  return (
     <html /*className={`${instrumentsans.varable} font-sans`} */lang="en">
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
      {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" /> */}
      <link rel="shortcut icon" href="/static/favicon.ico" />

      <body
        className={`text-bodytext antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
