import { Lora } from 'next/font/google'
import Image from 'next/image'
import {imgOurWorks} from '../logic/stuff.js'

const lora = Lora({
    weight: '400',
    subsets: ['latin'],
})

const OurWorks = () => {
    return ( 
        <div className="flex flex-col items-center justify-center">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 w-screen h-2/3 p-10 ">
                {imgOurWorks.map(work => (
                    <div className="flex flex-col " key={work.id}>
                        <Image src={work.imgSrc} alt={work.name} className="w-full h-auto" />
                        <p className="mt-2 relative w-max text-[#eb3729] font-bold uppercase">
                            <span className={`group ${lora.className} font-bold`}>
                                {work.name}
                            <span className="absolute bottom-1 left-0 w-0 h-[.05rem] bg-[#eb3729] transition-all duration-300 group-hover:w-full"></span>
                            </span>
                        </p>
                    </div>

                ))}
            </div>
        </div>
     );
}
 
export default OurWorks;