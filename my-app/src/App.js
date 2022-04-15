import './App.css';
import { Bar } from './Bar';
import { Home } from "./Home.js";
import { Troll } from "./Troll";
import { Shows } from "./Shows";
import { Route, Routes } from "react-router";
import Background1 from "./videos/background1.mp4";
import Background2 from "./videos/background2.gif";
import './fonts/Aeros.ttf'

function App() {
  return (
    
    <div className="App">
      <div id="background-video-div">
        {window.innerWidth >= 650 && 
          <video id="background-video" autoPlay loop muted>
            <source src={Background1} type="video/mp4" />
          </video>
        }
        {window.innerWidth < 650 &&
          <img id="background-video" src={Background2} alt="loading" />
        }
      </div>
      <Bar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/porn" element={<Troll />} />
      </Routes>
    </div>
  );
}

export default App;

/*
scp -r ./build/* kylelacanna@DigO:griffith




      */