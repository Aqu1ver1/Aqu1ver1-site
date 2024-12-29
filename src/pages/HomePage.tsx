import {FC} from 'react';
import Header from "../components/Header.tsx";
import MainInfo from "../modules/MainInfo/MainInfo.tsx";

const HomePage:FC = () => {
    return (
        <div>
            <Header/>
            <MainInfo/>
        </div>

    );
}

export default HomePage;