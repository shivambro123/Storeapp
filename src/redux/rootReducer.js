import {combineReducers} from 'redux';
import proreducer from './reducer';

const rootReducer = combineReducers(
    {
        product:proreducer,
    }
)

export default rootReducer;