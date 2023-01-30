import Navabar from "@/components/Navabar";
import Home from "@/pages/home/index";
import Contact from "@/pages/Contact";
import About from "@/components/About";
const index = () => {
  return (
    <div>
      <Navabar />
      <Home />
      <Contact />
      <About />
    </div>
  );
};

export default index;
