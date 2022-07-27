import { User } from "src/app/models/user.model";
import * as UserActions  from "../actions/user.action";

let Initial: {users: User[]} = {
    users: []
}

export function userReducer(state: {users: User[]} = Initial, action: UserActions.UserActions){
    switch(action.type){
        case UserActions.ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state;
    }
}