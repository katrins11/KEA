import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { piecesReducer } from '../pieces.reducer';


export class UsersState {
    piece: any[];
}
export class IAppState {
    users?: UsersState;
}

export const rootReducer = combineReducers<IAppState>({
    users: piecesReducer,
    // when you add more reducers, add them here..
    router: routerReducer
});