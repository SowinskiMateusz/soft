import { FC } from 'react';

interface IWrapperProps {
    title: string;
}

export const Wrapper: FC<IWrapperProps> = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}
