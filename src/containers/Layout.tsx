import React, { FC } from 'react';
import { Header } from '../component/Header/Header';

const Layout: FC = props => {
    return (
        <>
            <Header />
            <div>
                {props.children}
            </div>
        </>
    );
};

export default Layout;