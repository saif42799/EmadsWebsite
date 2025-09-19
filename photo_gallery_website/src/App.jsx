import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar.jsx"
import Home from './routes/Home.jsx'
import Gallery from "./routes/Gallery.jsx";
import Information from "./routes/Information.jsx";
import Tokyo from "./routes/collectionPages/Tokyo.jsx";
import Osaka from "./routes/collectionPages/Osaka.jsx";
import Kyoto from "./routes/collectionPages/Kyoto.jsx";
import NewYork from "./routes/collectionPages/NewYork.jsx";
import Muse from "./routes/collectionPages/Muse.jsx";
import LiquidEther from './LiquidEther';

function App() {
  return (
    <>

<div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
  <LiquidEther
    colors={['#93760B', '#B8B8B8', '#FFD500']}
    isViscous={false}
    viscous={20}                // reduced from 30 → lighter
    iterationsViscous={15}      // reduced from 32 → much lighter
    iterationsPoisson={15}      // reduced from 32 → much lighter
    resolution={0.25}           // lower resolution = less pixel stress
    isBounce={false}
    autoDemo={true}
    autoSpeed={0.4}             // slower movement = fewer calculations
    autoIntensity={1.2}         // reduced from 2.2 → less GPU redraw
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
  />
</div>



      <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Gallery" element={<Gallery></Gallery>}></Route>
        <Route path="/Information" element={<Information></Information>}></Route>
        <Route path="/Tokyo" element={<Tokyo></Tokyo>}></Route>
        <Route path="/Osaka" element={<Osaka></Osaka>}></Route>
        <Route path="/Kyoto" element={<Kyoto></Kyoto>}></Route>
        <Route path="/NewYork" element={<NewYork></NewYork>}></Route>
        <Route path="/Muse" element={<Muse></Muse>}></Route>
      </Routes>


    </>
  );
}

export default App