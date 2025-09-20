import React from 'react';
import { SERVICES_DATA, PRODUCTS_DATA } from '../constants';
import { HERO_IMAGE } from '../imageData';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gray-800 text-white h-[60vh] flex items-center justify-center text-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <img src={HERO_IMAGE} alt="Nigerian market scene" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="relative z-10 p-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight font-serif">Eskada</h1>
                    <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto">Premium Agricultural Goods & Expert Consultancy.</p>
                    <div className="mt-8 flex justify-center gap-4 flex-wrap">
                        <a href="#products" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">Shop Our Produce</a>
                        <a href="#services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">Explore Services</a>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section id="products-preview" className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 font-serif">Fresh From Our Farms</h2>
                        <p className="mt-2 text-lg text-gray-600">High-quality produce sourced locally in Port Harcourt.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {PRODUCTS_DATA.slice(0, 8).map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a href="#products" className="bg-transparent hover:bg-green-600 text-green-700 font-semibold hover:text-white py-3 px-8 border border-green-500 hover:border-transparent rounded-full transition duration-300">
                           Visit Our Full Shop
                        </a>
                    </div>
                </div>
            </section>

            {/* About Snippet */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 font-serif">Bridging Expertise with Growth</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        For over two decades, Eskada has been at the forefront of business innovation and sustainable agriculture. We blend deep industry knowledge in corporate strategy with a commitment to providing high-quality agricultural produce, empowering businesses and communities alike.
                    </p>
                    <a href="#about" className="mt-6 inline-block text-blue-600 font-semibold hover:text-blue-800 transition duration-150">
                        Learn More About Us &rarr;
                    </a>
                </div>
            </section>

            {/* Featured Services */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 font-serif">Our Consultancy Services</h2>
                        <p className="mt-2 text-lg text-gray-600">Expert guidance to navigate your business challenges.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {SERVICES_DATA.slice(0, 4).map(service => (
                            <ServiceCard key={service.title} service={service} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                         <a href="#services" className="bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-3 px-8 border border-blue-500 hover:border-transparent rounded-full transition duration-300">
                            View All Services
                        </a>
                    </div>
                </div>
            </section>

             {/* CTA Section */}
            <section className="bg-blue-800 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h2 className="text-3xl font-bold font-serif">Ready to Partner with Eskada?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-200">
                        Whether you need strategic business advice or a reliable supply of agricultural goods, we are here to help you succeed.
                    </p>
                    <a href="#contact" className="mt-8 inline-block bg-white text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
                        Get in Touch
                    </a>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
