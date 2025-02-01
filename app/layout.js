import {Josefin_Sans, Ovo} from "next/font/google";
const josefin=Josefin_Sans({
  subsets:["latin"],
  display:"swap",
});
const ovo=Ovo({
  subsets:["latin"],weight:"400",
});
import "@/app/_styles/globals.css"

export const metadata = {
  title: "portfolio",
  default:"Amit Pant/portfolio",
  description:"My Portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${josefin.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
