import "../src/style/App.scss";
import Navbar from "../src/containers/Navbar/Navbar";
import Hero from "../src/containers/Hero/Hero";
import Features from "../src/containers/Features/Features";
import Footer from "../src/containers/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
