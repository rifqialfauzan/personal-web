
// eslint-disable-next-line react/prop-types
const StackTag = ({text, borderColor, textColor, bgColor}) => {
    return (
        <div className={`font-kodemono  text-[0.7rem] px-2 py-1 font-semibold rounded-md ${borderColor} ${textColor} ${bgColor} w-fit hover:shadow-xl cursor-default`}>
            {text}
        </div>
    );
};

export default StackTag;