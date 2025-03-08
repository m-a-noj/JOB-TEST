/* Apply responsive styles for all components */
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CardRender from "./components/CardRender";
import { Footer } from "./components/Footer";
import NumericalAbility from "./components/pages/NumericalAbility"; // Import Numerical Ability Component
import { Computer } from "./components/pages/Computer";
import { CurrentAffairs } from "./components/pages/CurrentAffairs";
import English from "./components/pages/English";
import ExamDetails from "./components/pages/ExamDetails";
import { Hindi } from "./components/pages/Hindi";
import OnlineTest from "./components/pages/OnlineTest";
import Plan from "./components/pages/Plan";
import { Reasoning } from "./components/pages/Reasoning";
import { StaticGk } from "./components/pages/StaticGk";

function App() {
  const heading = "exam";
  const data = [
    { description: "Get expert bank exam preparation...", tittle: "Science" },
    { description: "Master math concepts...", tittle: "Computer" },
    { description: "Sharpen logical thinking...", tittle: "Static GK" },
    {
      description: "Improve your English language...",
      tittle: "Current Affairs",
    },
    {
      description: "Gain essential computer knowledge...",
      tittle: "Number Ability",
    },
    { description: "Take practice tests online...", tittle: "Reasoning" },
    { description: "Simulate real exam conditions...", tittle: "Hindi" },
    { description: "Simulate real exam conditions...", tittle: "English" },
    { description: "Simulate real exam conditions...", tittle: "Mathematic" },
  ];

  const examData = [
    { tittle: "Bank" },
    { tittle: "SSC GD" },
    { tittle: "Railway" },
    { tittle: "Delhi Police" },
    { tittle: "DSSSB" },
    { tittle: "SSC CGL" },
    { tittle: "SSC CPO" },
    { tittle: "Current Affairs" },
  ];

  return (
    <Router>
      <div className="app-container">
        {/* Navbar - Always Visible */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className="container-fluid ">
                  <About />
                </div>
                <div className="container-fluid my-5">
                  <div className="row">
                    <CardRender data={examData} />
                  </div>
                </div>
                <div className="container-fluid my-5">
                  <div className="row">
                    <CardRender data={data} />
                  </div>
                </div>
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/numerical-ability" element={<NumericalAbility />} />
          <Route path="/computer" element={<Computer />} />
          <Route path="/current-affairs" element={<CurrentAffairs />} />
          <Route path="/english" element={<English />} />
          <Route path="/exam-details" element={<ExamDetails />} />
          <Route path="/hindi" element={<Hindi />} />
          <Route path="/online-test" element={<OnlineTest />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/reasoning" element={<Reasoning />} />
          <Route path="/static-gk" element={<StaticGk />} />
        </Routes>

        {/* Footer - Always Visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
