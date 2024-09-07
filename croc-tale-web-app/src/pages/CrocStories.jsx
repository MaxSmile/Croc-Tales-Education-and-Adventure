// src/pages/CrocStories.jsx

import React from 'react';
import Layout from '../layouts/Layout';
import CrocStoriesData from '../data/crocs';

export default function CrocStories() {
    return (
        <Layout>
            <div className="container mx-auto text-center py-10">
                <h1 className="text-4xl font-bold mb-6 text-gray-800">Croc Stories</h1>

                <p className="text-lg text-gray-700 mb-6">
                    These stories have been made possible through collaboration with Crocwise.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.keys(CrocStoriesData).map((key, index) => {
                        const story = CrocStoriesData[key];
                        return (
                        <div key={index} className="bg-gray-200 rounded-lg p-6">
                            <h2 className="text-2xl font-semibold mb-2">
                                <a href={'/story/' + key}>{story.title}</a></h2>
                            <p className="text-lg mb-4">{story.location}</p>
                            <p className="text-lg mb-4">{story.design}</p>
                            <p className="text-lg mb-4">{story.crocwiseLesson}</p>
                            <p className="text-lg">{story.story}</p>
                        </div>  
                    )
                    })
                }
                </div>
            </div>
        </Layout>
    );
}