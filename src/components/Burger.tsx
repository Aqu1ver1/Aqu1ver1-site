import {useState} from "react";
import OpenedBurger from "./Burger/OpenedBurger.tsx";
import ClosedBurger from "./Burger/ClosedBurger.tsx";

const Burger = () => {

    const [toggled, setToggled] = useState(false);

    const HandleToggled = () => {
        setToggled(!toggled);
    }
    return (
        <div className="flex flex-col gap-4 items-end">
            <ClosedBurger onClose={HandleToggled}/>
            { toggled ? <OpenedBurger/> : null }
        </div>
    );
};

export default Burger;