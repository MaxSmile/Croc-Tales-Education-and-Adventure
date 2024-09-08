export default function InspirationSection() {
    return (
        <section className="bg-ntOrange text-white py-10">
            <div className="container mx-auto text-center">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-ntWhite text-gray-800 p-6 rounded shadow-md ml-4">
                        <h3 className="text-2xl font-semibold mb-4">Inspired by the success of Wrocław’s famous gnome statues</h3>
                        <p><img src="/images/gnome.jpg" alt="Gnome" className="w-full h-auto mt-4" /></p>
                        
               
                    </div>

                    <div className="bg-ntBlack text-white p-6 rounded shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">We bring you Croc Tales: Education and Adventure!
                        </h3>
                        <p className="text-lg">
                            Imagine exploring the Northern Territory, discovering crocodile statues across Darwin and beyond
                        </p>
                        <p><img src="/images/teacher.jpeg" alt="Croc Logo" className="w-full h-auto mt-4" /></p>
                        
                    </div>

                    <div className="bg-ntWhite text-gray-800 p-6 rounded shadow-md mr-4">
                        <h3 className="text-2xl font-semibold mb-4">It's more than just a Hot Tripadvisor topic</h3>
                        

                        <p>
                            Croc Tales teaches you how to stay safe in crocodile country, 
                            blending adventure with  learning vital Crocwise safety tips.
                        </p>
                        <p><img src="/images/croc-logo.svg" alt="Croc Logo" className="w-full h-auto mt-4" /></p>
                    </div>

                </div>
            </div>
        </section>
    );
}