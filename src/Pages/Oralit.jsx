import Navbar from "../components/Navbar";
import Foto from "../components/Foto";
import Composisi from "../components/Composisi";
import Judul from "../components/Judul";
import Section from "../components/Section";
import Footer from "../components/Footer";
const Oralit = () => {
    return (
        <>
            <Navbar className="sticky top-0">
                <span className="me-2">
                    <i className="fa-solid fa-pills"></i>
                </span>
                Ora<span className="text-green-500">Lit</span>
            </Navbar>
            <div className="lg:w-[100%] lg:h-[145vh] mx-auto px-4 lg:pt-3 text-gray-900 bg-gray-200 md:w-[100%]">
                <div className="lg:grid lg:grid-cols-5 lg:grid-rows-6 gap-4 md-container">
                    {/* Foto */}
                    <div className="lg:row-span-2 rounded-md md-foto">
                        <Foto />
                    </div>

                    {/* Composisi */}
                    <div className="lg:row-span-2 lg:row-start-3 rounded-md bg-white-shadow  md-composisi">
                        <Composisi />
                    </div>

                    {/* Judul & Section */}
                    <div className="lg:col-span-4 lg:col-start-2 rounded-md mt-5 bg-white-shadow">
                        <Judul />
                    </div>

                    <div className="lg:col-span-4 lg:row-span-3 lg:col-start-2 lg:row-start-2 rounded-md bg-white-shadow md-section">
                        <Section />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Oralit;
