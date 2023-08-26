import Appointment from "./components/Appointment";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Prices from "./components/Prices";


const App = () => {
  return <div className="w-full max-w-[1440px] px-auto bg-orange-quaternary relative">
    <Header />
    <Hero />
    <Appointment />
    <Prices />
    <div className="h-[2000px]">     
    </div>
  </div>;
};

export default App;
