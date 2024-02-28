import StackTag from "../components/StackTag.jsx";
// import {burgerQueen, chatbot, dashboard, webPortfolio} from "../assets/index.js";
import ProjectModal from "../components/ProjectModal.jsx";
import {projects} from "../constants/index.js";

function Portofolio() {
    return (
        <section className={`flex justify-evenly gap-5 lg:h-screen max-lg:flex-col max-w-[1440px] mx-auto`}>
            <div className="max-w-lg mx-auto flex flex-col justify-center  max-lg:text-sm  p-5">
                <h3 className={`font-kodemono text-3xl font-bold   uppercase`}>Projects</h3>
                <p className={`font-poppins mt-3`}>
                    Here are some projects that I can showcase to everyone. Feel free to explore my portfolio of projects, which range from web applications to machine learning models.
                </p>
                <p className={`font-poppins mt-3`}>
                    These are the technology stacks I used to build all of the projects showcased here.
                </p>
                <div className={`mt-5 flex  flex-wrap gap-3  `}>
                    <StackTag text={"Spring Boot"}/>
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
            <div className={` px-16 py-10  flex justify-center items-center `}>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5  ">
                    {/*<ProjectModal imgURL={burgerQueen} />*/}
                    {/*<ProjectModal imgURL={chatbot} />*/}
                    {/*<ProjectModal imgURL={webPortfolio} />*/}
                    {/*<ProjectModal imgURL={burgerQueen} />*/}
                    {projects.map((project) => (
                        <ProjectModal key={project.projectName}
                            preview={project.preview}
                                      thumbnail={project.projectThumbnail}
                            links={project.links}
                            firstParagraph={project.firstParagraph}
                            secondParagraph={project.secondParagraph}
                            projectTitle={project.projectName}
                            stacks={project.stacks} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portofolio;