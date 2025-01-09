function Hero() {
    return (
        <>
            <section id="home" className="h-screen bg-black flex items-center justify-center text-center fadeInUp px-4 sm:px-6 lg:px-8">
                <div className="space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#c4408c] via-[#f13472] to-[#f68639] bg-clip-text text-transparent">
                        <span className="bg-white bg-clip-text text-transparent">Hi, I'm</span> Biruntha Krishnamoorthy
                    </h2>
                    <h3 className="text-3xl sm:text-4xl font-extrabold">
                        <span className="text-4xl font-extrabold bg-[#c4408c] bg-clip-text text-transparent">MERN</span> Stack Developer
                    </h3>
                    <p className="text-base sm:text-lg text-white opacity-80 px-5 sm:px-8">
                        I am a passionate MERN stack developer dedicated to building innovative and impactful web solutions. With a strong foundation in MongoDB, Express.js, React.js, and Node.js, I thrive on crafting dynamic, responsive, and user-centric applications. My goal is to deliver seamless digital experiences while continuously learning and adapting to emerging web technologies.
                    </p>
                    <a 
                        href="https://drive.google.com/file/d/17uK21vVao_0fKjaqNcUXWJelGlqV0Hil/view?usp=drive_link" 
                        className="inline-block bg-[#c4408c] text-black py-3 px-6 rounded-full text-lg sm:text-xl hover:bg-[#f68639] transition duration-300 transform hover:scale-105"
                    >
                        Explore My Resume
                    </a>
                </div>
            </section>
        </>
    );
}

export default Hero;
