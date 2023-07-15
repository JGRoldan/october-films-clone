import { Kanit, Lora} from 'next/font/google';
    
const kanit = Kanit({
    weight: '600',
    subsets: ['latin'],
})
    
const lora = Lora({
    weight: '400',
    subsets: ['latin'],
})
    

const ContactInfo = ({city, children}) => {
    return ( 
        <div className="flex flex-col md:flex md:flex-row border-t-2 border-t-gray-100 pt-5">
            <div className="w-full md:w-1/4">
                <h2 className={`${kanit.className} text-left text-4xl md:p-2`}>{city}</h2>
            </div>
            <div className="w-full md:w-1/4 md:pt-3">
                <p className={`${lora.className} text-sm`}>{children}</p>
            </div>
            <div className="w-full md:w-2/4">
                <img src="https://www.enelsubte.com/wp-content/uploads/2016/01/google-maps-new-interface1.jpg" alt="Descripción de la imagen" className="w-full" />
            </div>
        </div>
     );
}
 
export default ContactInfo;