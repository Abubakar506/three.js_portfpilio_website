import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/components/Navbar";
import Hero from "./components/components/Hero";
import About from "./components/components/About";
import Experience from "./components/components/Experience";
import Tech from "./components/components/Tech";
import Works from "./components/components/Works";
import Feedbacks from "./components/components/Feedbacks";
import Contact from "./components/components/Contact";
import Stars from "./components/components/canvas/Stars";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-patter bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <Stars />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
