import React from 'react';
import { Product, BuyerType } from '../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
            <div className="overflow-hidden">
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <span className="text-sm text-green-700 font-semibold bg-green-100 px-2 py-1 rounded-full self-start">{product.category}</span>
                <h3 className="text-lg font-bold font-serif text-gray-800 mt-2">{product.name}</h3>
                <p className="text-gray-600 mt-1 flex-grow">{product.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                    {product.buyerTypes.includes(BuyerType.CONSUMER) && product.priceRetail !== 'N/A' && (
                        <div className="flex justify-between items-center text-sm mb-2">
                            <span className="text-gray-500">Retail Price:</span>
                            <span className="font-semibold text-gray-800">{product.priceRetail}</span>
                        </div>
                    )}
                     {product.buyerTypes.includes(BuyerType.INDUSTRIAL) && (
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Wholesale Price:</span>
                            <a href="#contact" className="font-semibold text-blue-600 hover:underline">{product.priceWholesale}</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;