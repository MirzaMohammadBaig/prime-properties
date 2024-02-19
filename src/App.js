import Route from './components/Route';
// import Sidebar from './components/Sidebar';
// import NavigationBar from './components/NavigationBar';
// import AccordionPage from './pages/AccordionPage';
// import DropdownPage from './pages/DropdownPage';
// import ButtonPage from './pages/ButtonPage';
// import ModalPage from './pages/ModalPage';
// import TablePage from './pages/TablePage';
// import CounterPage from './pages/CounterPage';
// import CounterPageReducer from './pages/CounterPageReducer';
import NavBar from "./components/NavBar";
import SiteBanner from './components/SiteBanner';
import Heading from './components/Heading';
import Card from './components/Card';
import LongCard from './components/LongCard';
import MiddleBanner from './components/MiddleBanner';
import OfferBanner from './components/OfferBanner';
import ClientTestimonial from './components/ClientTestimonial';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
   <div className="">
      <NavBar />
      <Route path="/prime-properties/">
        <SiteBanner />
        <Heading className="">
            <h2 className="text-3xl text-gray-500 mb-3 ">Recent Properties</h2>
        </Heading>
        {/* card-container */}
        <div className="grid p-10 gap-5 sm:grid-cols-1  md:grid-cols-3">
          <Card/>
          <Card/>
          <Card/>
        </div>
        <MiddleBanner></MiddleBanner>
        <Heading className="">
            <h2 className="text-3xl text-gray-500 mb-3 ">Locations</h2>
        </Heading>
        <div className="grid p-10 gap-5 sm:grid-cols-1  md:grid-cols-3">
          <LongCard/>
          <LongCard/>
          <LongCard/>
        </div>
        <OfferBanner></OfferBanner>
        <Heading className="">
            <h2 className="text-3xl text-gray-500 mb-3 ">What clients say about us ?</h2>
        </Heading>
        <div className='p-10 grid grid-cols-1 gap-2 md:grid-cols-3 sm:grid-cols-1'>
          <ClientTestimonial></ClientTestimonial>
          <ClientTestimonial></ClientTestimonial>
          <ClientTestimonial></ClientTestimonial>
        </div>
        <Heading className="">
            <h2 className="text-3xl text-gray-500 mb-3 ">Contact us</h2>
        </Heading>
        <Form />
        <Footer />
      </Route>
      <Route path="/prime-properties/services">service</Route>
      <Route path="/prime-properties/about">about</Route>
      <Route path="/prime-properties/contact">contact</Route>
    </div>
  );
}

export default App;
