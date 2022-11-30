import "./App.css";
import HamburgerMenu from "./components/HamburgerMenu";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import UrlInput from "./components/UrlInput";
import Statistics from "./components/Statistics";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HamburgerMenu />
      <Hero />
      <UrlInput />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
