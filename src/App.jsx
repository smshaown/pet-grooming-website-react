import Header from "./components/Header";
import Hero from "./components/Hero";


const App = () => {
  return <div className="w-full max-w-[1440px] px-auto bg-orange-quaternary relative">
    <Header />
    <Hero />
    <div className="h-[2000px]">     
    </div>
  </div>;
};

export default App;
