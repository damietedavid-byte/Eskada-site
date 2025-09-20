import React from 'react';
import { BLOG_POSTS_DATA } from '../constants';
import { BlogPost } from '../types';

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-gray-900 font-serif">{post.title}</h3>
            <div className="text-sm text-gray-500 mt-2">
                <span>By {post.author}</span> | <span>{post.date}</span>
            </div>
            <p className="mt-4 text-gray-600 flex-grow">{post.snippet}</p>
            <a href="#" className="mt-4 font-semibold text-blue-600 hover:text-blue-800 self-start">
                Read More &rarr;
            </a>
        </div>
    </div>
);

const BlogPage: React.FC = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight font-serif">Insights & Articles</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        Expert analysis on business strategy, agribusiness growth, and sustainability.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS_DATA.map((post) => (
                        <BlogPostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;