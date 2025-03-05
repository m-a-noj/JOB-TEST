/* Apply responsive styles for all components */
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CardRender from "./components/CardRender";
import { Footer } from "./components/Footer";

function App() {
  const data = [
    { description: "Get expert bank exam preparation...", tittle: "BANK" },
    { description: "Master math concepts...", tittle: "Numerical Ability" },
    { description: "Sharpen logical thinking...", tittle: "Reasoning" },
    { description: "Improve your English language...", tittle: "English" },
    { description: "Gain essential computer knowledge...", tittle: "Computer" },
    { description: "Take practice tests online...", tittle: "Current Affairs" },
    { description: "Simulate real exam conditions...", tittle: "Online Exam" },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <div className="container my-5">
        <About />
      </div>

      {/* Cards Section - Responsive Grid */}
      <div className="container my-5">
        <div className="row">
          <CardRender data={data} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
