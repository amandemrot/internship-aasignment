import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import gsap from 'gsap';

const faqs = [
    {
        question: 'How do I apply for internships?',
        answer: 'You can apply through our internship portal after creating your profile.',
    },
    {
        question: 'Do I need prior experience?',
        answer: 'No, we have opportunities for beginners as well as experienced applicants.',
    },
    {
        question: 'Are all internships paid?',
        answer: 'No, we offer both paid and unpaid internships depending on the role.',
    },
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const refs = useRef([]);

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            // Close current
            gsap.to(refs.current[index], {
                height: 0,
                duration: 0.4,
                ease: 'power2.inOut',
            });
            setOpenIndex(null);
        } else {
            // Close previous (if any)
            if (openIndex !== null && refs.current[openIndex]) {
                gsap.to(refs.current[openIndex], {
                    height: 0,
                    duration: 0.3,
                    ease: 'power2.inOut',
                });
            }
            // Open new
            const el = refs.current[index];
            gsap.set(el, { height: 'auto' });
            const height = el.offsetHeight;
            gsap.fromTo(
                el,
                { height: 0 },
                { height, duration: 0.4, ease: 'power2.inOut' }
            );
            setOpenIndex(index);
        }
    };

    return (
        <section id="faq" className="py-16 px-4 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                💡 Frequently Asked Questions
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full px-4 py-4 text-left flex justify-between items-center font-medium text-gray-800"
                        >
                            {faq.question}
                            {openIndex === index ? (
                                <FaChevronUp className="ml-2" />
                            ) : (
                                <FaChevronDown className="ml-2" />
                            )}
                        </button>
                        <div
                            ref={(el) => (refs.current[index] = el)}
                            className="px-4 text-gray-600 overflow-hidden h-0"
                        >
                            <p className="py-2">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQ;
