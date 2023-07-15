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
                    <pre>
                    Benwell Studios
                    11/13 Benwell Road
                    London N7 7BL
                    info@octoberfilms.co.uk
                    </pre>
                </ContactInfo>
                <ContactInfo city="Los Angeles">
                    <pre>
                    10880 Wilshire Boulevard
                    Suite 1101
                    Los Angeles CA 90024
                    info@octoberfilms.co.uk
                    </pre>
                </ContactInfo>
                <Footer />
            </main>  
        </>
    );
}
 
export default Contact;