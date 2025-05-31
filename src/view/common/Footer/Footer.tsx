export function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-900 to-blue-600 text-white !py-16 !px-8 mt-auto">
            <div className=" max-w-[98vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-[#444]">
                {/* About Us Section */}
                <div className="!px-4">
                    <h4 className="text-white text-xl !mb-6 uppercase relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[2px] after:bg-[#00ff88]">
                        About Us
                    </h4>
                    <p className="text-[#ccc] text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="px-4">
                    <h4 className="text-white text-xl !mb-6 uppercase relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[2px] after:bg-[#00ff88]">
                        Quick Links
                    </h4>
                    <ul className="list-none p-0">
                        <li className="mb-2"><a href="/" className="text-[#ccc] no-underline hover:text-[#00ff88] transition-colors duration-300">Home</a></li>
                        <li className="mb-2"><a href="/about" className="text-[#ccc] no-underline hover:text-[#00ff88] transition-colors duration-300">About</a></li>
                        <li className="mb-2"><a href="/contact" className="text-[#ccc] no-underline hover:text-[#00ff88] transition-colors duration-300">Contact</a></li>
                    </ul>
                </div>

                {/* Follow Us Section */}
                <div className="!px-4">
                    <h4 className="text-white text-xl !mb-6 uppercase relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[2px] after:bg-[#00ff88]">
                        Follow Us
                    </h4>
                    <div className="flex gap-4">
                        <a href="#" className="text-white text-2xl hover:text-[#00ff88] hover:-translate-y-[3px] transition-all duration-300"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-white text-2xl hover:text-[#00ff88] hover:-translate-y-[3px] transition-all duration-300"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-white text-2xl hover:text-[#00ff88] hover:-translate-y-[3px] transition-all duration-300"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-white text-2xl hover:text-[#00ff88] hover:-translate-y-[3px] transition-all duration-300"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="px-4">
                    <h4 className="text-white text-xl !mb-6 uppercase relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[2px] after:bg-[#00ff88]">
                        Newsletter
                    </h4>
                    <form className="flex flex-col gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 py-2 px-3 border-none rounded bg-[#444] text-white"
                        />
                        <button
                            type="submit"
                            className="!py-2 !px-6 bg-[#00ff88] text-[#2d2d2d] border-none rounded font-bold cursor-pointer hover:bg-[#00cc6a] transition-colors duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="text-center pt-8 mt-8 text-[#ccc] text-sm">
                <p>&copy; 2024 Supun. All rights reserved.</p>
            </div>
        </footer>
    );
}

/**
 * @author supunmadhuranga
 * @created 2025-05-10
 * @project vite1
 */