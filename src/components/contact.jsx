import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from "react";

function Contact() {
    const [showArrow, setShowArrow] = useState(false);

    // Show or hide the arrow based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById("home");
            const homeHeight = homeSection.offsetHeight;
            setShowArrow(window.scrollY > homeHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <section id="contact" className="py-20 bg-black text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h3 className="text-4xl font-extrabold text-white mb-6">Contact Me</h3>
                    <p className="text-lg text-gray-300 mb-6">I’m always open to new opportunities, ideas, and conversations! Whether you're looking to collaborate on a project, seek advice, or simply want to discuss the latest trends in technology, I’m eager to connect. Feel free to reach out if you're interested in sharing insights, brainstorming ideas, or just having a chat about the ever-evolving world of web development and tech!</p>
                    <div className="flex justify-center gap-6 mb-6">
                        <a href="https://github.com/Biruntha31k" className="text-3xl text-white hover:text-[#c4408c] transition duration-300">
                            <FaGithub />
                        </a>
                        <a href="www.linkedin.com/in/biruntha3105" className="text-3xl text-white hover:text-[#c4408c] transition duration-300">
                            <FaLinkedin />
                        </a>
                    </div>
                    <br></br>
                    <a href="mailto:bindhu31krish@gmail.com" className="bg-[#c4408c] text-black py-3 px-6 rounded-full text-xl hover:bg-[#f68639] transition duration-300 transform hover:scale-105">
                        Get in Touch
                    </a>
                     {/* Up Arrow Button */}
                {showArrow && (
                    <a
                        href="#home"
                        className="fixed bottom-6 right-4 bg-[#c4408c] text-black p-3 rounded-full shadow-lg hover:bg-[#f68639] transition duration-300 transform hover:scale-110"
                        title="Back to Top"
                    >
                        <FaArrowUp className="text-2xl" />
                    </a>
                )}
                </div>
            </section>
        </>
    );
}

export default Contact;
