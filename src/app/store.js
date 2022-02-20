import { createStore } from 'redux';
import rootReducer from '../app/reducer/index.js';
export default function configureStore() {
    const enhancers = [];

    const store = createStore(rootReducer, {}, ...enhancers);
    return store;
}
