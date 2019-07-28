import {combineReducers} from 'redux';
import landingReducer from '../../components/reducer';

export const reducers = {
    landingDetails: landingReducer
}

const rootReducers = combineReducers(
    Object.assign({}, reducers)
);

export default rootReducers;
