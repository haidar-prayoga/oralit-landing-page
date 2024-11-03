import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Typography from "../components/Typography";
import Button from "../components/Button";
import GejalaDiare from "../components/GejalaDiare";
import CaraMengatasi from "../components/CaraMengatasi";
import CaraMencegah from "../components/CaraMencegah";
const Materi = () => {
    return (
        <>
            <Navbar className={"sticky top-0"}><span className="text-green-500">Zi</span>nC</Navbar>
            <div className="mx-auto px-4 py-3">
                {/* First Row */}
                <div className="grid grid-cols-4 grid-rows-5 gap-4">
                    <div className="col-span-2 row-span-5 bg-gray-500 rounded-md text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]  hover:shadow-gray-600">
                        <div className="flex justify-center items-center h-[70%] pt-5 ">
                            <Typography />
                        </div>
                        {/* Button */}
                        <div className="flex px-7 h-[5%] gap-8">
                            <Button className="bg-gray-800 text-white">
                                <a href="https://www.mitrakeluarga.com/artikel/bagaimana-cara-menyembuhkan-diare-yang-aman-dan-mudah-di-rumah">Explore</a>
                            </Button>
                            <Button className="border border-gray-800 text-white">
                                <a href="https://www.alodokter.com/inilah-4-cara-mengatasi-diare-pada-orang-dewasa">Learn More</a>
                            </Button>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-5 col-start-3 md:row-span-5">
                        <img src="/images/doctor.jpg" alt="doctor" className="rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600" />
                    </div>
                </div>
            </div>
            {/* End First Row */}

            {/* Second Row */}
            <div className="mx-auto my-5 px-4 py-2 bg-gray-500 w-[100%] h-[75vh] text-gray-200">
                <div className="grid grid-cols-4 grid-rows-5 gap-4 pt-5">
                    <div className="col-span-2 row-span-2">
                        <GejalaDiare />
                    </div>
                    <div className="col-span-2 row-span-3 col-start-3">
                        <CaraMengatasi />
                    </div>
                </div>
            </div>
            {/* End Second Row */}

            {/* Third Row */}
            <div className="mx-auto px-4 py-3">
                <div className="grid grid-cols-4 grid-rows-6 gap-4">
                    <div className="col-span-2 row-span-6">
                        <CaraMencegah />
                    </div>
                    <div className="row-span-6 col-start-3">
                        <img src="/images/obat.png" alt="obat" className="rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600" />
                    </div>
                    <div className="row-span-3 col-start-4">
                        <img
                            src="/images/kuah-sayur.jpg"
                            alt="sayur"
                            className="rounded-md h-[200px] w-full object-cover shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600"
                        />
                    </div>
                    <div className="row-span-3 col-start-4 row-start-4">
                        <img src="/images/tea.jpg" alt="tea-cup" className="rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600" />
                    </div>
                </div>
            </div>
            {/* End Third Row */}

            {/* Fourth Row */}

            <div className="mx-auto px-4 py-3 bg-gray-200 h-[65vh]">
                <h1 className="text-3xl text-center my-3 uppercase font-semibold">Cara pemberian obat zinc</h1>
                <div className="grid grid-cols-8 grid-rows-3 gap-4">
                    <div className="col-span-2 row-span-3 bg-gray-500 text-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600">
                        <p className="p-4">
                            {`Pastikan semua anak yang menderita diare mendapat obat Zinc selama 10 hari berturut-turut Dosis obat Zinc (1 tablet= 20 mg)
 - Umur < 6 bulan: ½ tablet /hari,
 - Umur ≥ 6 bulan: 1 tablet /hari`}
                        </p>
                    </div>
                    <div className="col-span-2 row-span-3 col-start-3 text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600 bg-gray-500 rounded-lg">
                        <p className="p-4">
                            Larutkan tablet dalam satu sendok air matang atau ASI (tablet mudah
                            larut kurang lebih 30 detik), segera berikan kepada anak.
                        </p>
                    </div>
                    <div className="col-span-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600 row-span-3 col-start-5 text-white bg-gray-500 rounded-lg">
                        <p className="p-4">
                            Bila anak muntah sekitar setengah jam setelah pemberian obat Zinc, ulangi pemberian dengan cara memberikan potongan lebih kecil dilarutkan beberapa kali hingga satu dosis penuh.
                        </p>
                    </div>
                    <div className="col-span-2 row-span-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-gray-600 col-start-7 bg-gray-500 text-white rounded-lg">
                        <p className="p-4">
                            Bila anak menderita dehidrasi berat dan memerlukan cairan infus, tetap berikan obat Zinc segera setelah anak bisa minumm atau makan.
                        </p>
                    </div>
                </div>
            </div>

            {/* End Fourth Row */}
            <Footer />
        </>
    );
};

export default Materi;
