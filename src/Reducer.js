import { combineReducers } from 'redux';

// ログインフォームの初期状態
const initLoginState = {
    userName: '',
    password: ''
};

// ログインフォームのリデューサー
function loginReducer (state = initLoginState, action){
    switch (action.type) {
        case 'CHANGE_LOGIN_FORM':
            return {
                userName: action.userName,
                password: action.password
            };
        
        default:
            return state;
    }
}

// 登録フォームの初期状態
const initRegisterState = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

// 登録フォームのリデューサー
function registerReducer (state = initRegisterState, action){
    switch (action.type) {
        case 'CHANGE_REGISTER_FORM':
            return {
                userName: action.userName,
                email: action.email,
                password: action.password,
                confirmPassword: action.confirmPassword
            };
        
        default:
            return state;
    }
}

// 確認フォームの初期状態
const initVerifyState = {
    userName: '',
    code: ''
};

// 確認フォームのリデューサー
function verifyReducer (state = initVerifyState, action){
    switch (action.type) {
        case 'CHANGE_VERIFY_FORM':
            return {
                userName: action.userName,
                code: action.code
            };
        
        default:
            return state;
    }
}

// リデューサーを統合して出力
export default combineReducers({
    loginReducer,
    registerReducer,
    verifyReducer
});