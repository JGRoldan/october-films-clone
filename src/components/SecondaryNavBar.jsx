import { Montserrat } from 'next/font/google'
import Image from "next/image";
import Link from "next/link";
import markLogo from '../../public/OctoberOrange.svg'
import { navBarLinks } from "@/logic/stuff.js";
 
const monserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
})

const NavBar = () => {
    return ( 
        <nav className={`${monserrat.className} flex flex-col items-center md:flex-row md:justify-between p-5 inset-1`}>
        <Link href="/">
            <Image
              src={markLogo}
              alt="Logo"
              width={100}
            />  
        </Link>
          <div className="flex md:gap-10 gap-3 h-4 tracking-widest text-sm">
            {navBarLinks.map(link => (
              <Link href={link.path} key={link.id}>
                <p className="relative w-max text-[#eb3729] font-bold text-xs md:text-sm" key={link.id}>
                  <span className="group">
                    {link.navLink}
                  <span className="absolute -bottom-0 left-0 w-0 h-[.05rem] bg-[#eb3729] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </p>
              </Link>
            ))
            }
          </div>
        </nav>
    );
}
 
export default NavBar;