import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const heroRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // Page load animation
        gsap.fromTo(
            heroRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
        );

        // Scroll-based word-by-word animation
        const paragraph = textRef.current;
        const words = paragraph.innerText.split(' ');
        paragraph.innerHTML = words
            .map((word) => `<span class="word">${word}&nbsp;</span>`)
            .join('');

        gsap.fromTo(
            '.word',
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.07,
                duration: 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: paragraph,
                    start: 'top 80%',
                },
            }
        );
    }, []);

    return (
        <section
            id="hero"
            ref={heroRef}
            className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white px-4"
        >
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-blue-800">
                Welcome to the Future of Internships 🚀
            </h1>
            <p
                ref={textRef}
                className="max-w-2xl text-lg sm:text-xl text-center text-gray-700"
            >
                Explore curated internships, showcase your skills, and connect with
                real opportunities.
            </p>
        </section>
    );
}

export default Hero;
