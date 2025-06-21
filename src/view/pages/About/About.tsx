

export function About() {
    return (
        <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-blue-700 dark:text-blue-400">Who We Are</h2>

                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <img
                            src="https://via.placeholder.com/600x400/D1E7DD/212121?text=NS+Computer+Team" // Placeholder image - replace with a real image of your team or shop interior
                            alt="NS Computer Team Working"
                            className="rounded-lg shadow-xl object-cover w-full h-auto"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="md:w-1/2 text-lg leading-relaxed">
                        <p className="mb-6">
                            Welcome to <span className="font-semibold text-blue-600 dark:text-blue-300">NS Computer</span>, your dedicated local computer shop committed to bringing you the best in technology. We understand that in today's fast-paced world, reliable and efficient computing is essential.
                        </p>
                        <p className="mb-6">
                            That's why we've made it our mission to provide <span className="font-semibold">top-quality products, unparalleled customer service, and expert technical support</span> to individuals and businesses alike. Our passion for technology drives us to constantly seek out the latest innovations and ensure our customers have access to the best solutions available.
                        </p>
                        <p>
                            At NS Computer, we're more than just a shop; we're your trusted tech partner, here to help you navigate the digital landscape with confidence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}