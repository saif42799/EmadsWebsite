import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar.jsx"
import Home from './routes/Home.jsx'
import Gallery from "./routes/gallery.jsx";
import Information from "./routes/information.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Gallery" element={<Gallery></Gallery>}></Route>
        <Route path="/Information" element={<Information></Information>}></Route>
      </Routes>
    </>
  );
}

export default App