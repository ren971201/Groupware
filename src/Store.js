import { createStore } from 'redux';

import reducer from './reducers/index';

// ストアを作成して出力
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());