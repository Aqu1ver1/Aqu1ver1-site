import {FC} from 'react';

interface ClosedBurger {
    onClose: () => void;
}


const ClosedBurger:FC<ClosedBurger> = ({onClose}) => {

    return (
        <div onClick={onClose} className="flex flex-col items-end gap-2 h-full w-full">
            <span className="w-12 h-1.5 bg-brand-dark block rounded-xl"></span>
            <span className="w-16 h-1.5 bg-brand-dark block rounded-xl"></span>
            <span className="w-10 h-1.5 bg-brand-dark block rounded-xl"></span>
        </div>
    );
};

export default ClosedBurger;