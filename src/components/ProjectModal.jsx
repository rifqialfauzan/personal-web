
import React from "react";
import StackTag from "./StackTag.jsx";

// eslint-disable-next-line react/prop-types
const ProjectModal = ({thumbnail, preview, projectTitle, firstParagraph, secondParagraph, stacks, links}) => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                // className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                <img src={thumbnail} alt={projectTitle} className={`w-[230px] h-[230px] rounded-lg`}/>
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center lg:h-screen  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-h-[90%]  flex max-sm:flex-col ">
                            {/*content*/}
                            <div className={`max-w-2xl max-sm:mt-10 flex flex-col `}>
                                <div className={`overflow-y-scroll`}>
                                    <img src={preview} alt="project-preview"/>
                                </div>
                            </div>
                            <div
                                className="border-0 shadow-lg relative flex flex-col max-w-xl bg-white outline-none focus:outline-none overflow-y-scroll">
                                {/*header*/}
                                <div
                                    className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold font-kodemono">
                                        {projectTitle}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}>
                                        <span
                                            className="h-6 w-6 text-2xl block outline-none focus:outline-none">
                                          X
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className=" text-blueGray-500 text-sm leading-relaxed font-poppins">
                                        {firstParagraph}
                                    </p>

                                    <p className={`my-2 text-blueGray-500 text-sm leading-relaxed font-poppins`} >
                                        {secondParagraph}
                                    </p>

                                    <div className={`mt-6`}>
                                        <p className={`font-poppins text-sm font-semibold`}>Tech Stacks :</p>
                                        <div className={`flex justify-between mt-2`}>
                                            <div className={`flex flex-wrap max-w-80 gap-2`}>
                                                {/* eslint-disable-next-line react/prop-types */}
                                                {stacks.map((stack) => (
                                                    <StackTag key={stack.name} text={stack.name}/>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`mt-6`}>
                                        <p className={`font-poppins text-sm font-semibold`}>Links</p>
                                        <div className={`mt-3`}>
                                            {/* eslint-disable-next-line react/prop-types */}
                                            {links.map((link) => (
                                                <div key={link.name}
                                                     className={`flex mb-1  justify-start items-center gap-3`}>
                                                    <img src={link.icon} alt={link.name} width={20} height={20}/>
                                                    <a href={link.href} target={`_blank`}>{link.name}</a>
                                                </div>

                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div
                                    className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}>
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}>
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default ProjectModal;