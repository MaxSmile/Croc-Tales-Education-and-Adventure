// src/pages/NotFound.jsx
import React from 'react';  
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';

const NotFound = () => {
    return (
        <Layout>
            <div className="container mx-auto text-center py-10">
                <h1 className="text-5xl font-bold mb-6 text-red-600">404 - Page Not Found</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Oops! It looks like the page you are looking for doesn't exist.
                </p>

                {/* Button to redirect to homepage */}
                <Link
                    to="/"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
                >
                    Go Back to Home
                </Link>
            </div>
        </Layout>
    );
};

export default NotFound;
