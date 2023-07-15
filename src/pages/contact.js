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
                    Benwell Studios<br/>
                    11/13 Benwell Road<br/>
                    London N7 7BL<br/>
                </ContactInfo>
                <ContactInfo city="Los Angeles">
                    10880 Wilshire Boulevard<br/>
                    Suite 1101<br/>
                    Los Angeles CA 90024<br/>
                </ContactInfo>
                <Footer />
            </main>  
        </>
    );
}
 
export default Contact;