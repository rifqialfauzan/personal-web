import {Link, NavLink} from "react-router-dom";

function Sidebar() {
    return (
        <nav>
            <Link className="logo" to="/"></Link>
            <div className="nav-link">
                <ul>
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/about" >About</NavLink></li>
                    <li><NavLink to="/portfolio" >Portfolio</NavLink></li>
                    <li><NavLink to="/contact" >Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;