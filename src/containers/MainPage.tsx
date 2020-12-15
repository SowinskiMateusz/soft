import React, { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';

const MainPage: FC = () => {
    
    const changeFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }, [])

    return (
        <>
            <p>Main Page</p>
            <Link to='/entities'>Entities</Link>
            <input type="file" onChange={changeFile}/>
        </>
    )
}

export default MainPage;