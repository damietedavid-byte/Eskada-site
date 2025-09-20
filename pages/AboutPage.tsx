import React from 'react';
import { TEAM_IMAGE } from '../imageData';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight font-serif">About Eskada</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        Your Trusted Partner in Consultancy and Agriculture for Over 20 Years.
                    </p>
                </div>

                <div className="mt-12 grid md:grid-cols-2 gap-16 items-center">
                    <div className="prose prose-lg text-gray-700">
                        <h2 className="font-serif">Our Story</h2>
                        <p>
                            Founded over two decades ago in Port Harcourt, Eskada began with a singular mission: to provide unparalleled business consultancy services to the burgeoning industries of Nigeria. Our early focus on oil & gas mediation and corporate advisory quickly established us as a leader in strategic problem-solving.
                        </p>
                        <p>
                            As we grew, we recognized a powerful synergy between strategic business growth and the foundational strength of the agricultural sector. This led to the expansion of our operations into agriculture, where we apply the same principles of excellence, sustainability, and reliability.
                        </p>
                        <h2 className="font-serif">Our Mission</h2>
                        <p>
                            To empower businesses and communities by delivering expert consultancy and premium agricultural products. We are committed to fostering sustainable growth, building lasting partnerships, and contributing to the economic vitality of Nigeria and beyond.
                        </p>
                    </div>
                    <div>
                        <img 
                            src={TEAM_IMAGE}
                            alt="Eskada Team of Nigerian business professionals"
                            className="rounded-lg shadow-2xl"
                        />
                    </div>
                </div>

                <div className="mt-20">
                    <div className="lg:text-center">
                        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Expertise</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-serif">
                            A dual-pronged approach to success
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            We offer a unique combination of strategic insight and tangible products, creating value across diverse sectors.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-10 md:grid-cols-2">
                        <div className="p-8 bg-gray-50 rounded-lg">
                            <h3 className="text-2xl font-bold text-gray-900 font-serif">Business Consultancy</h3>
                            <p className="mt-4 text-gray-600">
                                With a rich history in high-stakes environments like oil & gas, our consultancy arm provides data-driven strategies, corporate advisory, and mediation services. We turn complex challenges into growth opportunities.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-lg">
                            <h3 className="text-2xl font-bold text-gray-900 font-serif">Agricultural Produce</h3>
                            <p className="mt-4 text-gray-600">
                                Our commitment to quality is evident in our agricultural division. From our sustainable fish farms to our fertile fruit and vegetable fields, we supply premium products for both consumer and industrial markets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
