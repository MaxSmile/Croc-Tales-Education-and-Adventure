// src/pages/Roadmap.jsx

import React from 'react';
import Layout from '../layouts/Layout';
import CrocTalesTimeline from '../components/CrocTalesTimeline';

const Roadmap = () => {
    return (
        <Layout>
            <div className="container mx-auto text-center py-10">
                <CrocTalesTimeline />
            </div>
        </Layout>
    );
};

export default Roadmap;
