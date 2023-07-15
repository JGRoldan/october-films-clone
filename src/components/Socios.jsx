import Image from 'next/image';
import {companyLogos} from '../logic/stuff.js'

const CompanyLogosSection = () => {

    return (
      <section className="py-8">
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {companyLogos.map((company) => (
              <div
                key={company.id}
                className="flex items-center justify-center"
              >
                <Image
                  src={company.imgSrc}
                  alt={company.name}
                  width={70}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CompanyLogosSection;