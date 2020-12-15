import { ISingleUser } from '../../entities/users';

export const GET_USERS = "GET_USERS";

export interface IUsersTypes {
    GET_USERS: {
        users: ISingleUser[];
    };
}