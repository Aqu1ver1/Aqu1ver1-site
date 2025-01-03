import Article from "../../components/Article.tsx";


const MainInfo = () => {
    return (
        <main className="max-w-[400px] flex flex-col gap-5 ml-36 mt-[72px]">
            <h1 className="w-60 text-5xl text-brand-light">Frontend Developer</h1>
            <Article color="light" size="text-xl">
                <p>
                    Hi! My name is Maksym, I'm a Frontend developer
                    with 2 years of experience.<br/>
                    I specialize in creating user-friendly,
                    productive and modern web applications.
                </p>
            </Article>
        </main>
    );
};

export default MainInfo;