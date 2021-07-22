import{
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
}from 'redux';
//import {ProductsReducur} from '../products/reducers';
import { UserReducer } from '../users/reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router'; 
import thunk from 'redux-thunk';

export default function createStore(history){
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            //products: ProductsReducur,
            users: UserReducer,
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    );
}