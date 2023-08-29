import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Prices from "./components/Prices";


const App = () => {
  return <div className="w-full max-w-[1440px] px-auto bg-orange-quaternary relative">
    <Header />
    <Hero />
    <Appointment />
    <Prices />
    <Contact />
    <Footer />    
  </div>;
};

export default App;
