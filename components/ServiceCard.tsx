import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="flex-shrink-0 mb-4">
                {service.icon}
            </div>
            <h3 className="text-xl font-bold font-serif text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 flex-grow">{service.description}</p>
             <a href="#contact" className="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-800 transition duration-150">
                Request Advisory &rarr;
            </a>
        </div>
    );
};

export default ServiceCard;