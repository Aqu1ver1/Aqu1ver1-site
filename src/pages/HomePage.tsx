import {FC} from 'react';
import Header from "../components/Header.tsx";
import MainInfo from "../modules/HomePage/MainInfo.tsx";
import Skills from "../modules/HomePage/Skills.tsx";
import Burger from "../components/Burger.tsx";
import Nav from "../components/Nav.tsx";
import SocialLinks from "../modules/HomePage/SocialLinks.tsx";
import Avatar from "../modules/HomePage/Avatar.tsx";

const HomePage:FC = () => {
    return (
        <div className="flex justify-between ">
            <section>
                <Header/>
                <MainInfo/>
                <Skills/>
            </section>
            <Avatar/>
            <section className="flex flex-col justify-between">
                <Burger/>
                <div className="flex flex-col gap-12 items-end">
                    <Nav/>
                    <SocialLinks/>
                </div>
            </section>
        </div>

    );
}

export default HomePage;