import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';

const Wrapper = styled.div<{color: string}>`
    background: ${props => props.color};
`;

interface IChildProps {
    getValueFromInput(e: React.ChangeEvent<HTMLInputElement>): void;
    body: string;
    color: string
}

export const Child: FC<IChildProps> = props => {
    const { users } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    return (
        <Wrapper color={props.color}>
            {props.body}
            {users && users.map(user => 
                <span key={user.id}>{user.name}</span>    
            )}
        </Wrapper>
    )
}