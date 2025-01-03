import CircleIcon from "../assets/CircleIcon.png"
import RectangleIcon from "../assets/RectangleIcon.svg"

const Nav = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 mt-">
            <img src={CircleIcon} alt="now"/>
            <img src={RectangleIcon} alt="next"/>
            <img src={RectangleIcon} alt="next"/>
            <img src={RectangleIcon} alt="next"/>
        </div>
    );
};

export default Nav;