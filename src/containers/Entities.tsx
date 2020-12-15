import React, { FC } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

const Entities: FC = () => {
    const params: { id: string } = useParams();
    const history = useHistory();
    return (
        <>
            <p onClick={() => history.push("/a")}>Entities</p>
            {console.log(params)}
            <Link to='/'>Main Page { params.id }</Link>
        </>
    )
}

export default Entities;