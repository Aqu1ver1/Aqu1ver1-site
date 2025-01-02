import {FC, ReactNode} from 'react';

type Props = {
    children: string | ReactNode;
    color: string;
    size?: string;
}

const Article:FC<Props> = ({children, color, size}) => {
    return (
        <article className={size ? `${size}` : "text-2xl"}>
            <p className={"text-brand-" + `${color}`}>
                {children}
            </p>
        </article>
    );
};

export default Article;