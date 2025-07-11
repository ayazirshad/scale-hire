import FAQ from "./sections/FAQ/FAQ";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import HireFrame from "./sections/HireFrame/HireFrame";
import Section1 from "./sections/Section1/Section1";
import Testimonial from "./sections/Testimonial/Testimonial";
import V3 from "./sections/V3/V3";

function App() {
  return (
    <div className="font-instrument">
      <Hero />
      <Section1 />
      <V3 />
      <Testimonial />
      <HireFrame />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
