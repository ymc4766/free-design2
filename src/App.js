// import Analytics from "./components/Analytics";
// import Footer from "./components/Footer";
import Home from "./components/Home";
// import NewsLatter from "./components/NewsLatter";
// import Navbar from "./header/Navbar";
import { FaHome } from "react-icons/fa";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Index />
      {/* <Home /> */}
      <Landing />
      <Pricing />
      <About />
      <Footer />
    </>
  );
}

export default App;
