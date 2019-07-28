import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import reducer from '../../components/reducer';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// import logger from 'redux-logger';
import rootReducer from './rootReducers';
export default function configureStore(intialState) {
    return createStore(rootReducer,
        intialState,
        applyMiddleware(thunk));
}