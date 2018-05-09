import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import promiseMiddleWare from 'redux-promise-middleware';
const composeStoreWithMiddleware = applyMiddleware(promiseMiddleWare());

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(composeStoreWithMiddleware);
export default createStore(reducer, enhancer);