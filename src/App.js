import AboutMe from "./AboutMe/AboutMe";
import "./App.css";
import Contact from "./Contact/Contact";
import LandingPage from "./LandingPage/LandingPage";
import Nav from "./Nav/Nav";
import Work from "./Work/Work";

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
      {/* <AboutMe />
      <Work />
      <Contact /> */}
    </div>
  );
}

export default App;
