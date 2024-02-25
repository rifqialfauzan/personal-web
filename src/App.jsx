
import {Route, Routes} from "react-router-dom";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Portfolio from "./sections/Portofolio.jsx";
import Contact from "./sections/Contact.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <main className={`flex w-full min-h-screen gap-10`}>
        <Sidebar></Sidebar>
        <section className={``}>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/portfolio" element={<Portfolio />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </section>
    </main>
  )
}

export default App
