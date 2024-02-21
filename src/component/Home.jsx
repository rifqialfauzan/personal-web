import hero from "../assets/home-image.jpg";


function Home() {
    return (
        <div className="content">
            <div className="greetings">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1>Hello, <br/> I'm <span className="name">RIFQI</span>. <br/> A <span
                    className="pos">Web Developer.</span></h1>
                <button className="home-cta">Contact Me</button>
            </div>
            <div className="home-image">
                <img src={hero} alt="home" style={{
                    position: "absolute",
                    right: 150 + 'px',
                    top: 55 + 'px',
                    borderRadius: 200 + 'px',
                    height: 500 + 'px'
                }}/>
            </div>
        </div>
    );
}

export default Home;