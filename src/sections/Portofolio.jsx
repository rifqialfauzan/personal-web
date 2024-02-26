import StackTag from "../components/StackTag.jsx";

function Portofolio() {
    return (
        <section className={`flex h-screen justify-between`}>
            <div className="max-w-md flex flex-col mt-20 ml-20 ">
                <h3 className={`font-kodemono text-3xl text-center font-bold bg-[#8CB9BD] px-3 text-[#FEFBF6] uppercase`}>Projects</h3>
                <p className={`font-poppins mt-3`}>That is my full name :) <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Alias aliquam commodi exercitationem fuga incidunt
                    quaerat quam recusandae repellendus tenetur vel! Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ad at distinctio eius labore nihil perferendis, sapiente tempora ullam vel vero!
                </p>
                <div className={`mt-5 flex flex-wrap gap-3  `}>
                    <StackTag text={"Spring Boot"} />
                    <StackTag text={"React"} />
                    <StackTag text={"Tailwind"} />
                    <StackTag text={"Java"} />
                    <StackTag text={"JavaScript"} />
                    <StackTag text={"Python"} />
                    <StackTag text={"MySQL"} />
                    <StackTag text={"NextJS"} />
                    <StackTag text={"PHP"} />
                    <StackTag text={"Laravel"} />

                </div>
            </div>
            <div className="bg-[#8CB9BD] grid grid-cols-4 grid-rows-4 grid-flow-col gap-3">
                <div className={``}>
                    1
                </div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div className={`grid-rows-subgrid row-span-2 border-2`}>6</div>
                <div>7</div>
                <div>8</div>
            </div>
        </section>
    );
}

export default Portofolio;