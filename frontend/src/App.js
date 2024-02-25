import "./App.css";
import NavBar from "./components/navBar";
import "./style/landingPage.css";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperHero from "./components/SuperHero";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="superhero">
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
