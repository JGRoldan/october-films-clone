import '../app/globals.css'
import SecondayNavBar from '@/components/SecondaryNavBar'
import Footer from '@/components/Footer'
import HeadTitle from '@/components/HeadTitle';
import ContactInfo from '@/components/ContactInfo';

const Contact = () => {
    return ( 
        <>
            <HeadTitle title="CONTACT"/>
            <main className='w-full h-screen'>
                <SecondayNavBar/>
                <ContactInfo city="London">
                    Datos del lugar
                </ContactInfo>
                <ContactInfo city="Los Angeles">
                    Datos del lugar
                </ContactInfo>
                <Footer />
            </main>  
        </>
    );
}
 
export default Contact;