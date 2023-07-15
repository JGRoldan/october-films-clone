const HeroVideo = () => {
    return ( 
        <div className="w-full h-screen flex items-center justify-center">
            <video className="w-full h-full object-cover" autoPlay muted loop>
                <source src={'/video/heroVideo.mp4'} />
            </video>
        </div>
    );
}
 
export default HeroVideo;