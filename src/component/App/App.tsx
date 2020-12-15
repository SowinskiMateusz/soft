import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Wrapper } from '../Wrapper/Wrapper';
import { Child } from '../Child/Child';
import { getUsers } from '../../actions/usersActions';
import { ISingleUser } from '../../entities/users';

type GetUsers = ReturnType<typeof getUsers>;

export const App: FC = () => {
    const dispatch = useDispatch();
    const [users, setUsers] = useState<ISingleUser[]>();
    const getValueFromInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    }, []);

    useEffect(() => {
        dispatch<GetUsers>(getUsers()).then((users) => {
            setUsers(users);
        })
    }, [dispatch]);

    return (
        <Wrapper title="difbiudasbvijask">
            {users &&
                <>
                    <Child body="ble"  color="red" getValueFromInput={getValueFromInput}/>
                    <Child body="ble2"  color="green" getValueFromInput={getValueFromInput}/>
                    <Child body="ble3"  color="blue" getValueFromInput={getValueFromInput}/>
                    <Child body="ble4"  color="yellow" getValueFromInput={getValueFromInput}/>
                </>
            }
        </Wrapper>
    )
}