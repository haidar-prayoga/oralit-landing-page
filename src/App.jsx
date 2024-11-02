import Navbar from './components/Navbar'
import Section from './components/Section'
import Footer from './components/Footer'
import Foto from './components/Foto'
import Composisi from './components/Composisi'
import Judul from './components/Judul'
const App = () => {
  return (
    <>
      <Navbar className="sticky top-0" />
      <div className='lg:w-[100%] lg:h-[150vh] mx-auto p-3 lg:pt-3 text-gray-900 bg-gray-200 md:w-[100%]'>
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
          <div className="lg:col-span-4 lg:col-start-2 rounded-md my-5 bg-white-shadow">
            <Judul />
          </div>

          <div className="lg:col-span-4 lg:row-span-3 lg:col-start-2 lg:row-start-2 rounded-md bg-white-shadow md-section">
            <Section />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default App