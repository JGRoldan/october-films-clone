import '../app/globals.css'
import SecondayNavBar from '@/components/SecondaryNavBar'
import OurWorks from '@/components/OurWorks'
import HeadTitle from '@/components/HeadTitle'
import Footer from '@/components/Footer'

export default function OurWork () {
    return ( 
        <>
        <HeadTitle title="OUR WORK"/>
        <main className='w-full overflow-hidden'>
            <SecondayNavBar/>
            <OurWorks />
            <div className='p-5'>
                <Footer />
            </div>
        </main>
        </>
     );
}