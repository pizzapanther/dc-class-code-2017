import { createStore } from 'redux';
import hn_reducer from './reducers';

var store = createStore(hn_reducer);

export default store;