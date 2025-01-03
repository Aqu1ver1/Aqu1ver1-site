import CircleIcon from "../assets/CircleIcon.png"
import RectangleIcon from "../assets/RectangleIcon.svg"

const Nav = () => {

    // const Rectangle = <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <rect y="14.4264" width="20" height="20" transform="rotate(-45 0 14.4264)" fill="#292528"/>
    // </svg>

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


