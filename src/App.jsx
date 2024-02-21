
import {Route, Routes} from "react-router-dom";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Portfolio from "./component/Portofolio.jsx";
import Contact from "./component/Contact.jsx";
import Sidebar from "./component/Sidebar.jsx";

function App() {
  return (
    <>
        <Sidebar></Sidebar>
      <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default App
