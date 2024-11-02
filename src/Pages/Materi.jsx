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
            <Navbar className={"sticky top-0"} />
            <div className="mx-auto px-4 py-3">
                {/* First Row */}
                <div className="grid grid-cols-4 grid-rows-5 gap-4">
                    <div className="col-span-2 row-span-5 bg-gray-200 rounded-md text-white">
                        <div className="flex justify-center items-center h-[70%] pt-5">
                            <Typography />
                        </div>
                        {/* Button */}
                        <div className="flex px-7 h-[5%] gap-8">
                            <Button className="bg-green-500 text-white">
                                <a href="">Explore</a>
                            </Button>
                            <Button className="border border-green-500 hover:text-white text-gray-900">
                                Learn More
                            </Button>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-5 col-start-3">
                        <img src="/images/doctor.jpg" alt="doctor" className="rounded-md" />
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
                        <img src="/images/obat.png" alt="obat" className="rounded-md"/>
                    </div>
                    <div className="row-span-3 col-start-4">
                        <img src="/images/kuah-sayur.jpg" alt="sayur" className="rounded-md h-[200px] w-full object-cover" />
                    </div>
                    <div className="row-span-3 col-start-4 row-start-4">
                        <img src="/images/tea.jpg" alt="tea-cup" className="rounded-md"/>
                    </div>
                </div>
            </div>
            {/* End Third Row */}
            <Footer />
        </>
    );
};

export default Materi;
