import React from 'react';
import { SERVICES_DATA } from '../constants';
import ServiceCard from '../components/ServiceCard';

const ServicesPage: React.FC = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight font-serif">Business Consultancy Services</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        Leveraging 20+ years of expertise to drive your business forward.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICES_DATA.map((service) => (
                        <ServiceCard key={service.title} service={service} />
                    ))}
                </div>

                <div className="mt-16 bg-blue-600 text-white p-8 rounded-lg text-center">
                    <h2 className="text-3xl font-bold font-serif">Ready to Elevate Your Business?</h2>
                    <p className="mt-2 text-lg text-blue-100">Our experts are ready to provide the strategic insights you need.</p>
                    <a 
                        href="#contact"
                        className="mt-6 inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300"
                    >
                        Book a Consultation
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;