import {FC} from 'react';
const Header: FC = () => {
    return (
        <header className="max-w-full h-14 mt-14">
            <nav className="text-3xl flex gap-16 justify-center text-brand-dark">
                <a href="/html/">Home</a>
                <a href="/html/">About me</a>
                <a href="/html/">Projects</a>
                <a href="/html/">Services</a>
                <a href="/html/">Contacts</a>
            </nav>
        </header>
    );
}

export default Header;