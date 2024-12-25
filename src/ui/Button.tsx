import React, {FC} from 'react';

interface ButtonProps {
    text: string;
    width:string;
    onClick?:() => void;
}

const Button:FC<ButtonProps> = ({text,width,onClick}) => {

    return (
            <button className={`${width}` + " h-12 bg-black text-white rounded-xl hover:text-brand"}
            >{text}</button>
    );
}

export default Button;