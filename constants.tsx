import React from 'react';
import { Service, Product, ProductCategory, BuyerType, BlogPost } from './types';
import * as Images from './imageData';

export const ICONS = {
    BRIEFCASE: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    CHART_BAR: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    SCALE: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
    GLOBE: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.704 4.04a9 9 0 0110.592 0M7.704 4.04L7 4.704M16.296 4.04L17 4.704m-9.592 0l-1.296-.664M17 4.704l1.296-.664M12 21a9 9 0 01-9-9h18a9 9 0 01-9 9z" /></svg>,
};


export const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Shop', href: '#products' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
];

export const SERVICES_DATA: Service[] = [
    {
        icon: ICONS.SCALE,
        title: 'Oil & Gas Mediation',
        description: 'With over 20 years of experience, we provide expert mediation services, fostering agreements and resolving disputes in the complex oil and gas sector.',
    },
    {
        icon: ICONS.BRIEFCASE,
        title: 'Corporate Advisory',
        description: 'Our advisory services help businesses navigate corporate challenges, from restructuring and mergers to governance and compliance.',
    },
    {
        icon: ICONS.CHART_BAR,
        title: 'Business Strategy',
        description: 'We partner with you to develop robust, data-driven business strategies that drive growth, efficiency, and long-term success.',
    },
    {
        icon: ICONS.GLOBE,
        title: 'Market Entry & Expansion',
        description: 'Leverage our deep market knowledge to successfully enter new territories or expand your existing footprint in Nigeria and beyond.',
    },
];

export const PRODUCTS_DATA: Product[] = [
    {
        id: 1,
        name: 'Fresh Catfish',
        category: ProductCategory.FISH,
        buyerTypes: [BuyerType.CONSUMER, BuyerType.INDUSTRIAL],
        description: 'Sustainably farmed in the Niger Delta, our premium quality catfish are perfect for a variety of local dishes. Available live or processed.',
        imageUrl: Images.FRESH_CATFISH_IMG,
        priceRetail: '₦2,500 / kg',
        priceWholesale: 'Contact for Pricing',
    },
    {
        id: 2,
        name: 'Pure Palm Oil',
        category: ProductCategory.PALM_OIL,
        buyerTypes: [BuyerType.CONSUMER, BuyerType.INDUSTRIAL],
        description: '100% organic, unrefined red palm oil, sourced from local groves. Rich in nutrients and essential for authentic Nigerian cuisine.',
        imageUrl: Images.PURE_PALM_OIL_IMG,
        priceRetail: '₦1,500 / liter',
        priceWholesale: 'Contact for Pricing',
    },
    {
        id: 3,
        name: 'Sweet Mangoes',
        category: ProductCategory.FRUITS,
        buyerTypes: [BuyerType.CONSUMER, BuyerType.INDUSTRIAL],
        description: 'Juicy, sweet Ogbomoso mangoes, harvested at peak ripeness for maximum flavor. Great for export and local consumption.',
        imageUrl: Images.SWEET_MANGOES_IMG,
        priceRetail: '₦1,000 / kg',
        priceWholesale: 'Contact for Pricing',
    },
    {
        id: 4,
        name: 'Vine-Ripened Tomatoes',
        category: ProductCategory.VEGETABLES,
        buyerTypes: [BuyerType.CONSUMER, BuyerType.INDUSTRIAL],
        description: 'Plump, red tomatoes bursting with flavor, grown in the fertile lands of Northern Nigeria. Perfect for stews and salads.',
        imageUrl: Images.VINE_TOMATOES_IMG,
        priceRetail: '₦1,500 / kg',
        priceWholesale: 'Contact for Pricing',
    },
     {
        id: 5,
        name: 'Smoked Catfish',
        category: ProductCategory.FISH,
        buyerTypes: [BuyerType.CONSUMER, BuyerType.INDUSTRIAL],
        description: 'Expertly smoked catfish, offering a rich, savory flavor. A delicacy that preserves well and enhances any Nigerian soup or stew.',
        imageUrl: Images.SMOKED_CATFISH_IMG,
        priceRetail: '₦5,000 / kg',
        priceWholesale: 'Contact for Pricing',
    },
    {
        id: 6,
        name: 'Fresh Oranges',
        category: ProductCategory.FRUITS,
        buyerTypes: [BuyerType.CONSUMER],
        description: 'Sweet and tangy oranges from local orchards, packed with Vitamin C. Perfect for juicing or eating fresh.',
        imageUrl: Images.FRESH_ORANGES_IMG,
        priceRetail: '₦1,200 / kg',
        priceWholesale: 'N/A',
    },
    {
        id: 7,
        name: 'Fresh Efo/Spinach',
        category: ProductCategory.VEGETABLES,
        buyerTypes: [BuyerType.CONSUMER, BuyerType.INDUSTRIAL],
        description: 'Nutrient-rich green leafy vegetables, known locally as Efo. Versatile for soups, stews, and salads.',
        imageUrl: Images.FRESH_SPINACH_IMG,
        priceRetail: '₦800 / bundle',
        priceWholesale: 'Contact for Pricing',
    },
    {
        id: 8,
        name: 'Pineapples',
        category: ProductCategory.FRUITS,
        buyerTypes: [BuyerType.CONSUMER, BuyerType.INDUSTRIAL],
        description: 'Tropical pineapples with a perfect balance of sweet and tart. Sourced from the best farms in the South-South region.',
        imageUrl: Images.PINEAPPLES_IMG,
        priceRetail: '₦1,000 / unit',
        priceWholesale: 'Contact for Pricing',
    },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
    {
        id: 1,
        title: 'The Future of Agribusiness in Nigeria: Trends to Watch',
        author: 'John Doe, CEO',
        date: 'October 26, 2023',
        snippet: 'Nigeria\'s agricultural sector is on the brink of a technological revolution. We explore the key trends, from precision farming to supply chain innovation...',
        imageUrl: Images.BLOG_AGRIBUSINESS_IMG,
    },
    {
        id: 2,
        title: 'Navigating Corporate Strategy in a Volatile Market',
        author: 'Jane Smith, Lead Strategist',
        date: 'October 15, 2023',
        snippet: 'In today\'s unpredictable economic climate, a resilient corporate strategy is more crucial than ever. Here are five principles to guide your planning...',
        imageUrl: Images.BLOG_STRATEGY_IMG,
    },
    {
        id: 3,
        title: 'Sustainability in Practice: Our Commitment to the Environment',
        author: 'Team Eskada',
        date: 'September 30, 2023',
        snippet: 'At Eskada, sustainability isn\'t just a buzzword. It\'s a core part of our operations, from our fish farms to our consultancy services. Learn about our initiatives...',
        imageUrl: Images.BLOG_SUSTAINABILITY_IMG,
    },
];
