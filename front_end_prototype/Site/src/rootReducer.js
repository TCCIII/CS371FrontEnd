import { combineReducers } from 'redux';
import mainReducer from './Main/Main';

export default combineReducers({
main: mainReducer
});