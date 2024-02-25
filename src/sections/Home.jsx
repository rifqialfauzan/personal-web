

function Home() {
    return (
        <section className={`w-screen overflow-hidden lg:max-w-[1260px] min-h-screen flex flex-col items-center justify-center`}>
            <div className={`flex flex-col items-center  justify-center p-5  `}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 className={`text-6xl font-bold font-kodemono leading-snug text-center`}>Hello<br/> I am <span className="name">Rifqi</span></h1>
                <p className={`font-poppins text-xl tracking-[10px] mt-2`}>A <span className=" underline-offset-4">Web Developer</span></p>
                <div className={`mt-16 flex gap-10`}>
                    <button className="font-poppins">Contact Me</button>
                    <button className="font-poppins">See My Works</button>
                </div>
            </div>
        </section>
    );
}

export default Home;