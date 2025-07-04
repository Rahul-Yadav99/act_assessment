import { useState } from 'react';
import { FaCode, FaShoppingCart, FaServer, FaChevronDown, FaChevronUp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './App.css'
import hero_one from './assets/img/hero_one.jpg'
import hero_two from './assets/img/hero_two.jpg'
import 'animate.css'
function App() {
    const [activeFaq, setActiveFaq] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    const faqs = [
        {
            question: "What services does ACT provide?",
            answer: "We offer custom software development, eCommerce solutions, and online store setups tailored to your business needs."
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on complexity. Basic websites can take 2-4 weeks, while complex applications may take several months."
        },
        {
            question: "Do you provide ongoing support?",
            answer: "Yes, we offer various support packages for all our solutions to ensure your systems run smoothly."
        },
        {
            question: "What technologies do you work with?",
            answer: "We work with modern technologies including React, Node.js, Python, PHP, Shopify, WooCommerce, and many others."
        }
    ];

    const pricingPlans = [
        {
            name: "Basic",
            price: "$999",
            features: [
                "Basic website setup",
                "5 pages",
                "Contact form",
                "Basic SEO",
                "1 month support"
            ],
            popular: false
        },
        {
            name: "Standard",
            price: "$2,999",
            features: [
                "Custom website design",
                "Up to 15 pages",
                "eCommerce functionality",
                "Advanced SEO",
                "3 months support",
                "Basic analytics"
            ],
            popular: true
        },
        {
            name: "Elite",
            price: "$5,999+",
            features: [
                "Fully custom solution",
                "Unlimited pages",
                "Advanced eCommerce",
                "Premium SEO",
                "6 months support",
                "Advanced analytics",
                "Custom integrations",
                "Priority development"
            ],
            popular: false
        }
    ];

    return (
        <div className="font-sans">
            {/* Navigation */}
            <nav className="bg-transparent fixed top-0 left-0 w-full z-10">
                <div className="max-w-[1200px] m-auto flex justify-between items-center text-white md:p-0 p-4">
                    <div className="text-2xl font-bold">ACT</div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="hover:text-blue-600 p-6">Home</a>
                        <a href="#solutions" className="hover:text-blue-600 p-6">Solutions</a>
                        <a href="#pricing" className="hover:text-blue-600 p-6">Pricing</a>
                        <a href="#faq" className="hover:bg-text-blue-600 p-6">FAQs</a>
                        <a href="#contact" className="hover:text-blue-600 p-6">Contact</a>
                    </div>
                    <button className="md:hidden">☰</button>
                </div>
            </nav>

            {/* Hero Section */}
            <section id='home' className='overflow-hidden relative text-white'>
                <div className="max-w-[1200px] m-auto h-screen py-20">
                    <div className="">
                        <div class="absolute top-0 left-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
                    </div>
                    <div className="flex items-center justify-center h-full relative">
                        {/* <img src={hero_one} className='absolute md:h-[180px] md:w-[400px] h-[100px] w-[200px] md:top-0 md:right-0 top-5 right-5 object-cover rounded-2xl opacity-95 animate__animated animate__fadeInRight' alt="" /> */}
                        {/* <img src={hero_two} className='absolute md:h-[180px] md:w-[400px] h-[100px] w-[200px] md:bottom-0 md:left-0 bottom-5 left-5 object-cover rounded-2xl opacity-70 animate__animated animate__fadeInLeft' alt="" /> */}
                        <div className="container mx-auto px-4 text-center animate__animated animate__fadeInUp">
                            <h1 className="text-3xl md:text-6xl font-bold mb-6">Avyukt Core <span className='bg-gradient-to-r from-blue-600 to-fuchsia-600 text-transparent bg-clip-text'>Technology</span></h1>
                            <p className="text-xl md:text-2xl mb-8">Custom software solutions to power your business growth</p>
                            <button className="bg-gradient-to-r from-blue-600 to-fuchsia-600 px-8 py-3 rounded-lg font-bold cursor-pointer">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section id="solutions" className="py-20 bg-[#01081c] text-white">
                <div className="max-w-[1200px] m-auto md:px-0 px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-r from-blue-600 to-fuchsia-600 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="text-white mb-4">
                                <FaCode className="text-4xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Custom Software Development</h3>
                            <p className="text-gray-100">Tailored software solutions designed specifically for your business needs and workflows.</p>
                        </div>
                        <div className="bg-gradient-to-r from-blue-600 to-fuchsia-600 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="text-white mb-4">
                                <FaShoppingCart className="text-4xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">eCommerce Solutions</h3>
                            <p className="text-gray-100">Complete online store setups with payment integration, inventory management, and more.</p>
                        </div>
                        <div className="bg-gradient-to-r from-blue-600 to-fuchsia-600 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="text-white mb-4">
                                <FaServer className="text-4xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Enterprise Solutions</h3>
                            <p className="text-gray-100">Scalable systems for large organizations with complex requirements and high traffic needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-[#01081c] text-white">
                <div className="max-w-[1200px] m-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {pricingPlans.map((plan, index) => (
                            <div key={index} className={`relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ${plan.popular ? 'border-2 border-purple-400' : 'border border-gray-200'}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                                        POPULAR
                                    </div>
                                )}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <p className="text-4xl font-bold mb-6">{plan.price}</p>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-blue-500 mr-2">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={`w-full py-3 rounded-lg font-bold cursor-pointer ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-fuchsia-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'} transition duration-300`}>
                                        Choose Plan
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-20 bg-[#01081c]">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl text-white font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <button
                                    className="w-full flex justify-between items-center p-4 text-left font-bold hover:bg-gray-50 transition duration-300"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span>{faq.question}</span>
                                    {activeFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {activeFaq === index && (
                                    <div className="p-4 pt-0 text-gray-600">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-[#01081c] text-white border-t">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div>
                            <h3 className="text-xl font-bold mb-6">Get in touch</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <FaEnvelope className="mt-1 mr-4" />
                                    <div>
                                        <p className="font-bold">Email</p>
                                        <p>contact@avyuktcoretech.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <FaPhone className="mt-1 mr-4" />
                                    <div>
                                        <p className="font-bold">Phone</p>
                                        <p>+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <FaMapMarkerAlt className="mt-1 mr-4" />
                                    <div>
                                        <p className="font-bold">Address</p>
                                        <p>123 Tech Park, Silicon Valley, CA 94000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full p-3 rounded text-gray-800 bg-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full p-3 rounded text-gray-800 bg-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="4"
                                        className="w-full p-3 rounded text-gray-800 bg-white"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-100 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; {new Date().getFullYear()} Avyukt Core Technology. All rights reserved.</p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="#" className="hover:text-blue-300">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-300">Terms of Service</a>
                        <a href="#" className="hover:text-blue-300">Careers</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;