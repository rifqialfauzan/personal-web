

function Contact() {
    return (
        <section className="flex items-center justify-between lg:h-screen ">
            <form className="max-w-lg mx-auto p-10">

                <label htmlFor="name" className={`font-poppins font-semibold`}>Name</label>
                <input type="text" id={`name`} placeholder={`your name...`} className={`p-3 font-poppins mt-2 mb-4 border-2 rounded-xl w-full`}/>

                <label htmlFor="email" className={`font-poppins font-semibold`}>Email</label>
                <input type="text" id={`email`} placeholder={`Your email...`} className={`p-3 font-poppins mt-2 mb-4 border-2 rounded-xl w-full`}/>

                <label htmlFor="message" className={`font-poppins font-semibold`}>Message</label>
                <textarea id={`message`} placeholder={`Write something...`} className={`p-3 font-poppins mt-2 mb-4 border-2 rounded-xl h-40 w-full`}/>

                <input type="submit" value={`Submit`} className={`border-2 px-4 py-2 border-none bg-[#04AA6D] text-white font-poppins font-semibold rounded-lg cursor-pointer hover:opacity-90`}/>


            </form>
            <div className={`w-1/2 max-w-xl h-full bg-[#8CB9BD] flex flex-col gap-10 justify-center items-center max-lg:hidden`}>
                <h1 className={`text-white text-8xl font-poppins text-center font-bold`}>THANK YOU </h1>
                <h1 className={`text-white text-8xl font-poppins text-center font-bold`}>FOR </h1>
                <h1 className={`text-white text-8xl font-poppins text-center font-bold`}>COMING</h1>
            </div>


        </section>
    );
}

export default Contact;