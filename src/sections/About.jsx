// import hero from "../assets/home-image.jpg";
import Button from "../components/Button.jsx";
import RandomPhotoCard from "../components/RandomPhotoCard.jsx";

function About() {
    return (
        <section className={`flex lg:h-screen justify-between`}>
            <div className="max-w-xl mx-auto flex flex-col justify-center p-5">
                <h3 className={`font-kodemono text-2xl font-bold bg-[#8CB9BD] px-3 text-[#FEFBF6] uppercase`}>Muhammad Rifqi Al Fauzan</h3>
                <p className={`font-poppins mt-3`}>That is my full name :) <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Alias aliquam commodi exercitationem fuga incidunt
                    quaerat quam recusandae repellendus tenetur vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at distinctio eius labore nihil perferendis, sapiente tempora ullam vel vero!
                </p>
                <p className={`font-poppins mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci asperiores corporis delectus deleniti dolorem expedita facere hic incidunt ipsam laboriosam maiores maxime modi molestiae optio quos rem repellat repudiandae saepe sunt temporibus, unde, vero voluptatum. A culpa dolorem, doloribus ea eaque earum eius illo minus nobis qui sed voluptatibus.</p>
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