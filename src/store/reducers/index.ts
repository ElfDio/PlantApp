import { combineReducers } from 'redux';
import categories from './categories';
import questions from './questions';

const appReducer = combineReducers({
    categories,
    questions
});

export default appReducer;


