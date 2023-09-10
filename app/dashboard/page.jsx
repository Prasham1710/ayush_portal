import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Cards from "../components/Cards";

export default function dashboard() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div >
        <Slider />
        <Cards/>
      </div>
      <div>
        <Faq/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
