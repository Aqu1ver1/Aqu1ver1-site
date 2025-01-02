import {FC} from 'react';
import Header from "../components/Header.tsx";
import MainInfo from "../modules/HomePage/MainInfo.tsx";
import Skills from "../modules/HomePage/Skills.tsx";
import Burger from "../components/Burger.tsx";
import Nav from "../components/Nav.tsx";
import SocialLinks from "../modules/HomePage/SocialLinks.tsx";

const HomePage:FC = () => {
    return (
        <div className="flex justify-between ">
            <section>
                <Header/>
                <MainInfo/>
                <Skills/>
            </section>
            <section className="flex flex-col justify-between">
                <Burger/>
                <Nav/>
                <SocialLinks/>
            </section>
        </div>

    );
}

export default HomePage;