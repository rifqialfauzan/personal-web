import hero from "../assets/home-image.jpg";

function About() {
    return (
        <section>
            <div className="about-me">
                <h3>Muhammad Rifqi Al Fauzan</h3>
                <p>That is my full name :) <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Alias aliquam commodi exercitationem fuga incidunt
                    quaerat quam recusandae repellendus tenetur vel!
                </p>
                <button>Get Resume</button>
            </div>
            <div className="my-photo">
                <img src={hero} alt="home" style={{
                    position: "absolute",
                    right: 150 + 'px',
                    top: 55 + 'px',
                    borderRadius: 200 + 'px',
                    height: 500 + 'px'
                }}/>
            </div>
        </section>
    );
}

export default About;