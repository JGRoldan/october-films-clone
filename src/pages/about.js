import '../app/globals.css'
import { Kanit, Lora} from 'next/font/google';
import Story from '@/components/Story';
import SecondayNavBar from '@/components/SecondaryNavBar'
import Socios from '@/components/Socios'
import OurTeam from '@/components/OurTeam'
import Footer from '@/components/Footer'
import HeadTitle from '@/components/HeadTitle';

const kanit = Kanit({
    weight: '600',
    subsets: ['latin'],
})

const lora = Lora({
    weight: '400',
    subsets: ['latin'],
})

export default function About () {
    return ( 
        <>
            <HeadTitle title="WHO WE ARE"/>
            <main className='w-full h-screen'>
                <SecondayNavBar/>
                <div className={`flex justify-center w-full items-center p-10 ${kanit.className}`}>
                    <p className='text-3xl md:text-6xl text-center'>October is an acclaimed and independent producer of premium content for global broadcast platforms</p>
                </div>
                <Socios />
                <div className={`p-5 ${lora.className}`}>
                    <Story />
                    <OurTeam />
                    <Footer />
                </div>
            </main>  
        </>
     );
}
