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