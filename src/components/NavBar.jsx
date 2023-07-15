import Image from "next/image";
import Link from "next/link";
import markLogo from '../../public/mark.svg'
import { navBarLinks } from "@/logic/stuff.js";

const NavBar = () => {
    return ( 
        <nav className="flex flex-col items-center md:flex-row md:justify-between md:items-start p-5 inset-1 absolute z-10">
          <Link href="/">
            <Image
              src={markLogo}
              alt="Logo"
            />  
          </Link>
          <div className="flex gap-10 h-4 text-slate-100 tracking-widest">
          {navBarLinks.map(link=>(
            <Link href={link.path} key={link.id}>
              <p className=" relative w-max text-xs md:text-sm">
                <span className="group ">
                {link.navLink}
                <span className="absolute bottom-0 left-0 w-0 h-[.08rem] bg-[#eb3729] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </p>
            </Link>
          ))}
          </div>
        </nav>
    );
}
 
export default NavBar;