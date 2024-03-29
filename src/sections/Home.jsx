import Button from "../components/Button.jsx";
import {socialLinks} from "../constants/index.js";


function Home() {
    return (
        <section className={`bg-home-green bg-cover h-screen flex justify-center`}>
            <div className={`flex flex-col items-center  justify-center p-5  `}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 className={`text-7xl max-sm:text-5xl font-bold font-kodemono leading-snug text-center`}>Hello<br/>I am <span className="name">Rifqi</span></h1>
                <p className={`font-poppins text-xl tracking-[10px] mt-1 max-sm:text-sm max-sm:mt-3`}>A <span className=" underline-offset-4">Web Developer</span></p>
                <div className={`mt-10 flex gap-10 max-sm:gap-2 max-sm:mt-7`}>
                    <Button text="Contact Me" url={"/contact"}/>
                    <Button text="See My Works" url={"/portfolio"} />
                </div>
                <div className={`mt-10 flex items-center gap-5 max-sm:gap-2 max-sm:mt-7`}>
                    <h1 className={`font-bold cursor-default`}>-</h1>
                    {socialLinks.map((social) => (
                        <a key={social.name} href={social.url} target={`_blank`}>
                            <img src={social.icon} alt={social.name} width={20} height={20}
                                 className={`hover:scale-125 transition-transform `}/>
                        </a>
                    ))}
                    <h1 className={`font-bold cursor-default`}>-</h1>
                </div>
            </div>
        </section>
    );
}

export default Home;