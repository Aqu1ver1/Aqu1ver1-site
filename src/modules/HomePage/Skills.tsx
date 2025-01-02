import {FC} from 'react';
import Article from "../../components/Article.tsx";

const Skills:FC = () => {
    return (
        <div className="flex flex-col gap-6 ml-40 mt-20">
            <h2 className="text-4xl text-brand-light">Skills</h2>
            <Article color="light">
                <div className="flex gap-12">
                    <ul className="list-disc">
                        <li>React, JS</li>
                        <li>Typescript</li>
                        <li>Next.js and node.js</li>
                        <li>Jest, autotests</li>
                        <li> Webpack</li>
                    </ul>
                    <ul className="list-disc">
                        <li>Effective Communication</li>
                        <li>Adaptability to Change</li>
                        <li>Attention to Detail</li>
                        <li>Customer-Centric Mindset</li>
                        <li>Innovative Thinking</li>
                    </ul>
                </div>
            </Article>
        </div>
    );
};

export default Skills;