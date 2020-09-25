import { combineReducers } from 'redux';

import loginReducer from './LoginReducer';
import registerReducer from './RegisterReducer';
import verifyReducer from './VerifyReducer';
import menuReducer from './MenuReducer';

// リデューサーを統合して出力
export default combineReducers({
    loginReducer,
    registerReducer,
    verifyReducer,
    menuReducer
});