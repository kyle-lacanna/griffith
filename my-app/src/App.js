import './App.css';
import { Bar } from './Bar';
import { Home } from "./Home.js";
import { Route, Routes } from "react-router";
import Background1 from "./videos/background1.mp4";
import './fonts/Aeros.ttf'

function App() {
  return (
    <div className="App">
      <div id="background-video-div">
        <video id="background-video" autoPlay loop muted>
          <source src={Background1} type="video/mp4" />
        </video>
      </div>
      
      <Bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

/*




      <Nav />
        <Socials />
      */