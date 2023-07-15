import Image from 'next/image';
import logoOctober from '../../public/October.svg'

const HeroOctoberLogo = () => {
    return (       
        <div className="flex items-end justify-center absolute inset-20 ">
            <Image
            src={logoOctober}
            alt="Logo October"
            className='w-full'
            />
        </div> 
    );
}
 
export default HeroOctoberLogo;