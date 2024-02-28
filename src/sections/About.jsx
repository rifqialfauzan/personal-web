// import hero from "../assets/home-image.jpg";
import Button from "../components/Button.jsx";
import RandomPhotoCard from "../components/RandomPhotoCard.jsx";

function About() {
    return (
        <section className={`flex lg:h-screen justify-between`}>
            <div className="max-w-xl mx-auto flex flex-col justify-center p-5">
                <h3 className={`font-kodemono text-2xl font-bold bg-[#8CB9BD] px-3 text-[#FEFBF6] uppercase`}>Muhammad Rifqi Al Fauzan</h3>
                <p className={`font-poppins mt-5`}>
                    That is my full name :) <br/>
                    I am a passionate Computer Science graduate with experience in software development. With my educational background, I have developed skills in various programming languages and related technologies, such as Java, Python, JavaScript, and SQL.
                </p>
                <p className={`font-poppins mt-5`}>
                    My experience includes web development, data processing, and machine learning. I believe that technology has great potential to bring positive change to society, and I am excited to continue contributing innovative solutions through my skills and knowledge.
                </p>
                <div className={`mt-5 `}>
                    <Button text={"Get Resume"}/>
                </div>
            </div>
            <div className="flex items-center mr-10 p-10 max-w-md  max-lg:hidden">
                {/*<img src={hero} alt="home" className={`rounded-full h-full`}/>*/}
                <RandomPhotoCard />
            </div>

        </section>
    );
}

export default About;