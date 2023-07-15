import Image from 'next/image';
import portrait from '../../public/portrait.webp'
const CardTeam = () => {

    const ourTeam = [
        { id: 1, name: 'John Doe', position: 'Joint Owner and Managing Director'},
        { id: 2, name: 'John Doe', position: 'Joint Owner and Director, Production and Operations'},
        { id: 3, name: 'John Doe', position: 'Joint Owner and Creative Director'},
        { id: 4, name: 'John Doe', position: 'Director of Finance and Business Affairs'},
        { id: 5, name: 'John Doe', position: 'Head of Development'},
        { id: 6, name: 'John Doe', position: 'Production Executive'},
    ]

    return ( 
        <>
            {ourTeam.map((team) => (
                <div className="p-4" key={team.id}>
                    <div className="bg-white">
                    <Image
                        src={portrait}
                        className="w-full h-auto"
                    />
                      <div className="pt-2">
                        <h3 className="text-md font-semibold text-[#eb3729] uppercase">{team.name}</h3>
                        <p className="text-sm mt-2">{team.position}</p>
                      </div>
                    </div>
                </div>
            ))}
        </>

     );
}
 
export default CardTeam;