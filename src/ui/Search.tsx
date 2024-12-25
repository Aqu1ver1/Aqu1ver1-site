import React, {FC} from 'react';
import SearchIco from '../assets/SearchIcon.png';


interface SearchProps {
    searchIcon?:boolean,
    width: string,
    placeholder: string;
}

const Search:FC<SearchProps> = (props) => {

    const sizeVariants: { [key: string]: string}  = {

        SearchBrand: 'w-[564px] ',
        SearchByAddress: 'w-[622px] ',
        SearchHeader: 'w-[450px] ',
    }

    return (
        <div className={`${sizeVariants[props.width]}` +
            "border border-gray-500 rounded-xl flex items-center px-6 justify-between"}>
            <input className="outline-none w-full h-12 bg-transparent placeholder-white"
                   placeholder={props.placeholder}
                   type="text"

            />
            {props.searchIcon && <img src={SearchIco} alt="Search"/>}
        </div>
    );
}

export default Search;