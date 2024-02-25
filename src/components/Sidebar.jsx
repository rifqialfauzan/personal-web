import {Link, NavLink} from "react-router-dom";
import {aboutIcon, contactIcon, hamburger, homeIcon, projectsIcon} from "../assets/index.js";

function Sidebar() {
    return (
        <nav className={`p-5 flex flex-col justify-center items-center `}>
            <div className={`absolute top-10 left-16`}>
                <Link className="logo text-5xl font-bold font-poppins tracking-[-6px]" to="/">AL</Link>
            </div>
            <div className={``}>
                <ul className={`flex flex-col justify-center items-center gap-7 max-lg:hidden`}>
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
                <div className={"hidden max-lg:block absolute right-10 top-10"}>
                    <img src={hamburger} alt="Hamburger" width={25} height={25}/>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;