import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Typography from "../components/Typography";
import Button from "../components/Button";
import GejalaDiare from "../components/GejalaDiare";
import CaraMengatasi from "../components/CaraMengatasi";
import CaraMencegah from "../components/CaraMencegah";
import KeDokter from "../components/KeDokter";
const Materi = () => {
    return (
        <>
            <Navbar className={"sticky top-0"}>
                <span className="me-2">
                    <i className="fa-solid fa-stethoscope"></i>
                </span>
                <span className="text-green-500">Di</span>are
            </Navbar>
            {/* First Row */}
            <div className="mx-auto px-4 pt-5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="col-span-1 md:col-span-2 min-h-[400px] bg-gray-500 rounded-md text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600">
                        <div className="flex justify-center items-center h-[70%] pt-5">
                            <Typography />
                        </div>
                        {/* Button */}
                        <div className="flex flex-col sm:flex-row px-4 sm:px-7 h-[5%] gap-4 sm:gap-8">
                            <Button className="w-full sm:w-auto bg-gray-800 text-white">
                                <a href="https://www.mitrakeluarga.com/artikel/bagaimana-cara-menyembuhkan-diare-yang-aman-dan-mudah-di-rumah">
                                    Explore
                                </a>
                            </Button>
                            <Button className="w-full sm:w-auto border border-gray-200 hover:border-gray-900 text-white">
                                <a href="https://www.alodokter.com/inilah-4-cara-mengatasi-diare-pada-orang-dewasa">
                                    Learn More
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <img
                            src="/images/doctor.jpg"
                            alt="doctor"
                            className="w-full h-full object-cover rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600"
                        />
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="mx-auto my-5 px-4 py-2 bg-gray-500 w-full min-h-[75vh] text-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-5">
                    <div className="col-span-1 md:col-span-2">
                        <GejalaDiare />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <CaraMengatasi />
                    </div>
                </div>
            </div>

            {/* Third Row */}
            <div className="mx-auto px-4 py-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="col-span-1 sm:col-span-2">
                        <CaraMencegah />
                    </div>
                    <div className="col-span-1">
                        <img
                            src="/images/obat.png"
                            alt="obat"
                            className="w-full h-full object-cover rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600"
                        />
                    </div>
                    <div className="col-span-1 space-y-4">
                        <img
                            src="/images/kuah-sayur.jpg"
                            alt="sayur"
                            className="w-full h-[200px] object-cover rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600"
                        />
                        <img
                            src="/images/tea.jpg"
                            alt="tea-cup"
                            className="w-full h-[200px] object-cover rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600"
                        />
                    </div>
                </div>
            </div>

            {/* Fourth Row */}
            <div className="mx-auto px-4 py-3 mt-3 bg-gray-200 min-h-[65vh]">
                <h1 className="text-3xl text-center my-3 uppercase font-semibold">
                    Cara pemberian obat zinc
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-gray-500 text-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600">
                        <p className="p-4">
                            {`Pastikan semua anak yang menderita diare mendapat obat Zinc selama 10 hari berturut-turut Dosis obat Zinc (1 tablet= 20 mg)
                - Umur < 6 bulan: ½ tablet /hari,
                - Umur ≥ 6 bulan: 1 tablet /hari`}
                        </p>
                    </div>
                    <div className="text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600 bg-gray-500 rounded-lg">
                        <p className="p-4">
                            Larutkan tablet dalam satu sendok air matang atau ASI (tablet
                            mudah larut kurang lebih 30 detik), segera berikan kepada anak.
                        </p>
                    </div>
                    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600 text-white bg-gray-500 rounded-lg">
                        <p className="p-4">
                            Bila anak muntah sekitar setengah jam setelah pemberian obat Zinc,
                            ulangi pemberian dengan cara memberikan potongan lebih kecil
                            dilarutkan beberapa kali hingga satu dosis penuh.
                        </p>
                    </div>
                    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600 bg-gray-500 text-white rounded-lg">
                        <p className="p-4">
                            Bila anak menderita dehidrasi berat dan memerlukan cairan infus,
                            tetap berikan obat Zinc segera setelah anak bisa minumm atau
                            makan.
                        </p>
                    </div>
                </div>
            </div>
            {/* End Fourth Row */}

            {/* Five Row */}
            <div className="mx-auto px-4 my-3 py-6">
                <div className="lg:grid lg:grid-cols-4 lg:grid-rows-5 gap-4 md-fifth-container">
                    <div className="lg:col-span-2 lg:row-span-5 md:row-span-4">
                        <KeDokter />
                    </div>
                    <div className="lg:col-span-2 lg:row-span-5 lg:col-start-3 md:row-span-4 md:row-start-5">
                        <img
                            src="/images/doctor-women.jpg"
                            alt="doctor"
                            className="w-full h-full object-cover rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600"
                        />
                    </div>
                </div>
            </div>
            {/* End Five Row */}

            {/* Six Row */}
            <div className="mx-auto px-4 mt-3 py-6 bg-gray-200">
                <h1 className="text-3xl text-center my-3 py-4 uppercase font-semibold">
                    Cuci tangan 6 langkah untuk menghindari diare
                </h1>
                <img
                    src="/images/cuci-tangan.jpg"
                    alt="cuci tangan"
                    className="w-full h-full object-cover rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600"
                />
            </div>
            <Footer />
        </>
    );
};

export default Materi;
