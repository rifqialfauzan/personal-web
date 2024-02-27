import ProjectModal from "../components/ProjectModal.jsx";
import {burgerQueen} from "../assets/index.js";

function Contact() {
    return (
        <section className="flex justify-evenly border-4">
            <div >
                <h3>dont be hesitate to reach me</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <div className="social-link">
                    {/*    Social-Icon */}
                </div>
            </div>
            <div className="contact-form">
                {/*  Contact Form  */}
                <ProjectModal imgURL={burgerQueen}/>
            </div>


        </section>
    );
}

export default Contact;