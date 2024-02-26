
// eslint-disable-next-line react/prop-types
const StackTag = ({text, borderColor = 'border-green-500', textColor, bgColor}) => {
    return (
        <div className={`font-kodemono text-[0.7rem] px-2 py-2 font-semibold rounded-lg ${borderColor} ${textColor} ${bgColor} border-2 w-fit hover:shadow-xl cursor-default`}>
            {text}
        </div>
    );
};

export default StackTag;