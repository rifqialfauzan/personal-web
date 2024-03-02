import { NavLink} from "react-router-dom";
import {aboutIcon, contactIcon, hamburger, homeIcon, projectsIcon} from "../assets/index.js";
import {useState} from "react";

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
                            <img src={homeIcon} alt="homeIcon" width={28} height={28}
                                 className={`hover:opacity-90 opacity-70 active:opacity-90`}/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            <img src={aboutIcon} alt="homeIcon" width={28} height={28}
                                 className={`hover:opacity-90 opacity-70`}/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">
                            <img src={projectsIcon} alt="homeIcon" width={24} height={24}
                                 className={`hover:opacity-90 opacity-70`}/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <img src={contactIcon} alt="homeIcon" width={24} height={24}
                                 className={`hover:opacity-90 opacity-70`}/>
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