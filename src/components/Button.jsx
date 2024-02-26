
// eslint-disable-next-line react/prop-types
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Button = ({text, url}) => {
    return (
        <button className={` px-5 py-3 rounded-xl font-poppins font-semibold bg-[#FEFBF6] border-2 hover:border-[#8CB9BD] hover:bg-[#8CB9BD] hover:text-[#FEFBF6] transition-colors`}>
            <Link to={url}>{text}</Link>
        </button>
    );
};

export default Button;