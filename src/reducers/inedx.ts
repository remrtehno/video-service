import { combineReducers } from 'redux';
import isLoading from './common';

const rootReducer = combineReducers({
    isLoading,
});

export default rootReducer;
