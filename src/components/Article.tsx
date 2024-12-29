import {FC, ReactNode} from 'react';

type Props = {
    children: string | ReactNode;
    color: string;
}

const Article:FC<Props> = ({children, color}) => {
    return (
        <article className="text-2xl" >
            <p className={"text-brand-" + `${color}`}>
                {children}
            </p>
        </article>
    );
};

export default Article;