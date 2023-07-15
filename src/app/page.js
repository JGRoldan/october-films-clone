import NavBar from '../components/NavBar'
import HeroVideo from '../components/HeroVideo';
import HeroOctoberLogo from '../components/HeroOctoberLogo';
import Modal from '../components/Modal';

const HomePage = () => {
  return (
    <>
    <Modal paginaOficial="OctoberFilms"/>
    <main className='w-full h-screen overflow-hidden'>
      <NavBar/>
      <HeroVideo />
      <HeroOctoberLogo />
    </main>
    </>
  );
};

export default HomePage;