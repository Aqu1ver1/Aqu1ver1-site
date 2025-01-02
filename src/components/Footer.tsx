import LogoWhite from "../assets/LogoWhite.png"
import NavBar from "../ui/NavBar";
import SocialNetwork from "../ui/SocialNetwork";

const Footer = () => {
    return (
        <footer className="bg-brand py-16 px-60 flex flex-col gap-6 text-white items-center">
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={LogoWhite} alt="logo"/>
                    <h2 className="text-2xl font-bold">Royal Pizza</h2>
                </div>
                <NavBar/>
                <div className="flex items-center gap-3">
                    <p>Contact </p>
                    <p className="font-bold">+380 (98) 657-10-95</p>
                </div>
            </div>
            <SocialNetwork/>
        </footer>
    );
};

export default Footer;