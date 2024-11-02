const Footer = () => {
    return (
        // Footer Section
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                {/* <!-- Main Footer Content --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Universitas Ngudi Waluyo</h3>
                        <blockquote className="text-gray-400 mb-4 italic dark:text-white"><p>
                            Kesehatan adalah investasi terbaik untuk masa depanmu. Jadi, jangan sia-siakan.
                        </p></blockquote>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    {/* <!-- Contact Info --> */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                Jl. Diponegoro no 186 Gedanganak - Ungaran Timur, Kab. Semarang Jawa Tengah
                            </li>
                            <li>
                                <i className="fas fa-phone mr-2"></i>
                                (024) 6925408
                            </li>
                            <li>
                                <i className="fas fa-envelope mr-2"></i>
                                ngudiwaluyo@unw.ac.id
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Newsletter --> */}
                    <div className="mb-8">
                        <h3 className=" font-bold mb-4">Informasi lebih lanjut ada pada website resmi kami</h3>
                        <p className="text-gray-400 mb-4">
                            <a href="https://unw.ac.id/" className="text-gray-400 hover:text-white hover:underline">unw.ac.id</a>
                        </p>
                    </div>
                </div>

                {/* <!-- Bottom Footer --> */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            <span className="text-white"> © Aulya Nur Izatun</span>. Hak Cipta Dilindungi.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white text-sm">Kebijakan Privasi</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm">Syarat & Ketentuan</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer