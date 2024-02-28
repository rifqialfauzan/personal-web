import {useState} from "react";
import {myPhotos} from "../constants/index.js";

const RandomPhotoCard = () => {
    const [img, setImg] = useState(myPhotos[0])
    const clickHandler = () => {
        setImg(myPhotos[Math.floor(Math.random() * myPhotos.length)])
    };
    return (

            <img src={img} alt="" onClick={clickHandler} className={`rounded-full h-full w-full`}/>

    );
};

export default RandomPhotoCard;