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
                        const url = '/story/' + key;
                        return (
                        <div key={index} className="bg-gray-200 rounded-lg p-6">
                            <h2 className="text-2xl font-semibold mb-2">
                                <a href={url}>{story.title}</a></h2>
                            <p className="text-sm underline mb-4">{story.location}</p>
                            
                            <p className="text-lg mb-4">{story.crocwiseLesson}</p>
                            <a href={url}><img src={story.image || '/images/croc-logo.svg'} 
                            alt={story.title} className="w-full h-auto" /></a>

                            <p className="text-sm mt-8 text-left"><a href={url} className='btn-orange'>Find out more</a></p>
                        </div>  
                    )
                    })
                }
                </div>
            </div>
        </Layout>
    );
}