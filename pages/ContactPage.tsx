import React, { useState } from 'react';
import { LOCATION_IMAGE } from '../imageData';

const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        inquiryType: 'Consultancy',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API
        console.log('Form submitted:', formState);
        setIsSubmitted(true);
    };

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight font-serif">Contact Us</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        We're here to help. Reach out to us for any inquiries about our services or products.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        {isSubmitted ? (
                             <div className="text-center py-10">
                                <h2 className="text-2xl font-bold text-green-600 font-serif">Thank you!</h2>
                                <p className="mt-2 text-gray-700">Your message has been sent successfully. We will get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 font-serif">Send us a Message</h2>
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                        <input type="text" name="name" id="name" required value={formState.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                        <input type="email" name="email" id="email" required value={formState.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                                    </div>
                                    <div>
                                        <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700">Inquiry Regarding</label>
                                        <select name="inquiryType" id="inquiryType" value={formState.inquiryType} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                            <option>Consultancy</option>
                                            <option>Agricultural Products</option>
                                            <option>General Inquiry</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                        <textarea name="message" id="message" rows={4} required value={formState.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            Submit Inquiry
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                    
                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 font-serif">Our Office</h3>
                            <p className="mt-2 text-gray-600">123 Business Avenue, Port Harcourt, Nigeria</p>
                            <div className="mt-4">
                                <img src={LOCATION_IMAGE} alt="Street view in Port Harcourt, Nigeria" className="rounded-md w-full h-48 object-cover"/>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 font-serif">Contact Details</h3>
                            <p className="mt-2 text-gray-600">Email: <a href="mailto:info@eskada.com" className="text-blue-600 hover:underline">info@eskada.com</a></p>
                            <p className="mt-1 text-gray-600">Phone: <a href="tel:+2348000000000" className="text-blue-600 hover:underline">+234 800 000 0000</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
