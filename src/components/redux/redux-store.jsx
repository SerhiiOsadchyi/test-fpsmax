import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import notesReducer from "./notes-reducer";


const reducers = combineReducers( {
    notesPage: notesReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;