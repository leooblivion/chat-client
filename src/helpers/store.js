import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, composedEnhancer);
