import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";
import { footer } from "./constants";
import rocket from "./assets/rocket.png";
import astronaut from "./assets/astronaut.png";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter basename="/Mern-stack-blog">
      <div className="bg-primary relative z-0 min-h-screen flex flex-col">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
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
          <StarsCanvas />
        </div>
        <footer className="w-full mt-8 py-6 flex flex-col items-center justify-center gap-2 border-t border-secondary bg-primary">
          <div className="flex items-center gap-2">
            <img src={footer.icon} alt="GitHub" className="w-6 h-6 mr-2" />
            <span className="text-secondary text-sm">{footer.text}</span>
          </div>
          <a href={`mailto:${footer.email}`} className="text-xs text-blue-400 hover:underline mt-1">{footer.email}</a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-3 focus:outline-none"
            aria-label="Back to top"
          >
            <img
              src={rocket}
              alt="Rocket to top"
              className="w-14 h-14 animate-rocket-bounce"
              style={{ transition: 'transform 0.2s' }}
            />
          </button>
          {/* Fixed astronaut button for About Me */}
          <a
            href="#about"
            className="back-to-about-btn"
            style={{ position: 'fixed', right: '2rem', bottom: '3rem' }}
            aria-label="Back to About Me"
            title="Back to About Me"
          >
            <img
              src={astronaut}
              alt="Astronaut to About Me"
              className="pulsate-astronaut"
            />
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;

// Add this to your globals.css or in a <style> tag in App.tsx:
//
// @keyframes rocket-bounce {
//   0%, 100% { transform: translateY(0); }
//   50% { transform: translateY(-24px) scale(1.1); }
// }
// .animate-rocket-bounce {
//   animation: rocket-bounce 1.2s infinite;
// }
//
// @keyframes pulsate {
//   0%, 100% { transform: scale(1); }
//   50% { transform: scale(1.1); }
// }
// .pulsate-astronaut {
//   animation: pulsate 1.5s infinite;
// }
