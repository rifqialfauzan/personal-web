import { NavLink} from "react-router-dom";

import {useState} from "react";
import {hamburger} from "../assets/index.js";

function Sidebar() {
    const [smallNavbar, setSmallNavbar] = useState(false);

    const handleClick = () => {
      setSmallNavbar(!smallNavbar);
    }

    return (
        <nav className={``}>
            {/*<div className={` top-10 left-16`}>*/}
            {/*    <Link className="logo text-2xl font-bold font-pacifico " to="/">Alfauzan</Link>*/}
            {/*</div>*/}
            <div className={`w-20 h-screen fixed flex justify-center `}>
                <ul className={` flex flex-col justify-center items-center gap-7 max-lg:hidden`}>
                    <li className={``}>
                        <NavLink to="/" className={``}>
                            <svg className={`w-6 h-6 fill-current opacity-70  hover:text-red-700 transition-colors`}
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                                <path
                                    d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z"/>
                            </svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            <svg className={`w-6 h-6 fill-current opacity-70  hover:text-red-700 transition-colors`}
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="8" rx="5" ry="6"/>
                                <path
                                    d="M21.8 19.1c-.9-1.8-2.6-3.3-4.8-4.2-.6-.2-1.3-.2-1.8.1-1 .6-2 .9-3.2.9s-2.2-.3-3.2-.9c-.5-.2-1.2-.3-1.8 0-2.2.9-3.9 2.4-4.8 4.2-.7 1.3.4 2.8 1.9 2.8h15.8c1.5 0 2.6-1.5 1.9-2.9z"/>
                            </svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">
                            <svg className={`w-6 h-6 fill-current opacity-70  hover:text-red-700 transition-colors`}
                                 viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M572.1 82.38C569.5 71.59 559.8 64 548.7 64h-100.8c.2422-12.45 .1078-23.7-.1559-33.02C447.3 13.63 433.2 0 415.8 0H160.2C142.8 0 128.7 13.63 128.2 30.98C127.1 40.3 127.8 51.55 128.1 64H27.26C16.16 64 6.537 71.59 3.912 82.38C3.1 85.78-15.71 167.2 37.07 245.9c37.44 55.82 100.6 95.03 187.5 117.4c18.7 4.805 31.41 22.06 31.41 41.37C256 428.5 236.5 448 212.6 448H208c-26.51 0-47.99 21.49-47.99 48c0 8.836 7.163 16 15.1 16h223.1c8.836 0 15.1-7.164 15.1-16c0-26.51-21.48-48-47.99-48h-4.644c-23.86 0-43.36-19.5-43.36-43.35c0-19.31 12.71-36.57 31.41-41.37c86.96-22.34 150.1-61.55 187.5-117.4C591.7 167.2 572.9 85.78 572.1 82.38zM77.41 219.8C49.47 178.6 47.01 135.7 48.38 112h80.39c5.359 59.62 20.35 131.1 57.67 189.1C137.4 281.6 100.9 254.4 77.41 219.8zM498.6 219.8c-23.44 34.6-59.94 61.75-109 81.22C426.9 243.1 441.9 171.6 447.2 112h80.39C528.1 135.7 526.5 178.7 498.6 219.8z"/>
                            </svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <svg  className={`w-6 h-6 fill-current opacity-70  hover:text-red-700 transition-colors`}
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 3H4C1.8 3 0 4.8 0 7v10c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4zm1.6 5.8-7.9 5.3c-.5.3-1.1.5-1.7.5s-1.2-.2-1.7-.5L2.4 8.8c-.4-.3-.5-.9-.2-1.4.3-.4.9-.5 1.4-.2l7.9 5.3c.3.2.8.2 1.1 0l7.9-5.3c.5-.3 1.1-.2 1.4.3.2.4.1 1-.3 1.3z"/>
                            </svg>
                        </NavLink>
                    </li>
                </ul>

            </div>
            <div className={"hidden max-lg:block absolute right-10 top-10"}>
                <img src={hamburger} onClick={handleClick} alt="Hamburger" width={25} height={25}/>
            </div>

            {smallNavbar?
                <div className={`fixed w-full bg-white`}>
                    <nav>
                        <ul className={`flex flex-col justify-center items-center`}>
                            <li className={`p-3`}>
                                <a href="/" className={`font-poppins font-semibold`}>Home</a>
                            </li>
                            <li className={`p-3`}>
                                <a href="/about" className={`font-poppins font-semibold`}>About</a>
                            </li>
                            <li className={`p-3`}>
                                <a href="/portfolio" className={`font-poppins font-semibold`}>Portfolio</a>
                            </li>
                            <li className={`p-3`}>
                                <a href="/contact" className={`font-poppins font-semibold`}>Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                : null}
        </nav>
    );
}

export default Sidebar;