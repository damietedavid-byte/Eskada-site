import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA } from '../constants';
import ProductCard from '../components/ProductCard';
import { ProductCategory, BuyerType } from '../types';

const ProductsPage: React.FC = () => {
    const [categoryFilter, setCategoryFilter] = useState<ProductCategory | 'all'>('all');
    const [buyerTypeFilter, setBuyerTypeFilter] = useState<BuyerType | 'all'>('all');
    
    const filteredProducts = useMemo(() => {
        return PRODUCTS_DATA.filter(product => {
            const categoryMatch = categoryFilter === 'all' || product.category === categoryFilter;
            const buyerTypeMatch = buyerTypeFilter === 'all' || product.buyerTypes.includes(buyerTypeFilter);
            return categoryMatch && buyerTypeMatch;
        });
    }, [categoryFilter, buyerTypeFilter]);
    
    // FIX: Explicitly type the arrays to guide TypeScript's generic type inference for FilterButton.
    const categories: (ProductCategory | 'all')[] = ['all', ...Object.values(ProductCategory)];
    const buyerTypes: (BuyerType | 'all')[] = ['all', ...Object.values(BuyerType)];

    // FIX: Correctly type the generic FilterButton to infer state setter types.
    const FilterButton = <T extends string>({ value, currentFilter, setFilter, children }: { value: T, currentFilter: T, setFilter: React.Dispatch<React.SetStateAction<T>>, children: React.ReactNode }) => (
        <button
            onClick={() => setFilter(value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-150 ${
                currentFilter === value 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
        >
            {children}
        </button>
    );

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight font-serif">Our Farm-Fresh Products</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
                        Premium quality goods from the Niger Delta for industrial buyers and everyday consumers.
                    </p>
                </div>

                <div className="mb-12 p-6 bg-white rounded-lg shadow-md">
                    <div className="mb-4">
                        <h3 className="font-semibold text-gray-800 mb-2">Filter by Category:</h3>
                        <div className="flex flex-wrap gap-2">
                           {categories.map(cat => (
                               <FilterButton key={cat} value={cat} currentFilter={categoryFilter} setFilter={setCategoryFilter}>
                                   {cat === 'all' ? 'All Categories' : cat}
                               </FilterButton>
                           ))}
                        </div>
                    </div>
                     <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Filter by Buyer Type:</h3>
                        <div className="flex flex-wrap gap-2">
                            {buyerTypes.map(type => (
                                <FilterButton key={type} value={type} currentFilter={buyerTypeFilter} setFilter={setBuyerTypeFilter}>
                                    {type === 'all' ? 'All Buyers' : type}
                                </FilterButton>
                            ))}
                        </div>
                    </div>
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <h3 className="text-2xl font-semibold text-gray-700">No products match your criteria.</h3>
                        <p className="text-gray-500 mt-2">Please adjust your filters and try again.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsPage;