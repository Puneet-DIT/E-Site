import { Action } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const ADD_USER = '[USER] Add';

export class AddUser implements Action {
    readonly type = ADD_USER;

    constructor(public payload: User){}
}

export type UserActions = AddUser;