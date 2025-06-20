import React, { useEffect, useRef } from 'react';
import { FaLaptopCode, FaLightbulb, FaUserFriends } from 'react-icons/fa';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Products() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const cards = sectionRef.current.querySelectorAll('.product-card');
        gsap.fromTo(
            cards,
            { opacity: 0, scale: 0.8, y: 40 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            }
        );
    }, []);

    const features = [
        {
            icon: <FaLaptopCode size={40} className="text-blue-600 mx-auto" />,
            title: 'Skill Showcase',
        },
        {
            icon: <FaLightbulb size={40} className="text-yellow-500 mx-auto" />,
            title: 'Project Guidance',
        },
        {
            icon: <FaUserFriends size={40} className="text-green-600 mx-auto" />,
            title: 'Mentor Connect',
        },
    ];

    return (
        <section id="products" ref={sectionRef} className="py-16 bg-white px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                🚀 Best Selling Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="product-card bg-blue-50 shadow-md rounded-lg p-6 text-center hover:scale-105 transition"
                    >
                        {item.icon}
                        <p className="mt-4 text-lg font-semibold text-gray-800">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;
