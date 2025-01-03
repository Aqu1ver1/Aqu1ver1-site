import Photo from "../../assets/Avatar1520.png"

const Avatar = () => {
    return (
        <div className="flex w-96 mt-[116px]">
            <svg className="absolute ml-10 mt-10" width="318" height="378" viewBox="0 0 318 378" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="316" height="376" stroke="#8C8C8C" stroke-width="2"/>
            </svg>
            <img className="absolute" src={Photo} alt="photo"/>


        </div>
    );
};

export default Avatar;