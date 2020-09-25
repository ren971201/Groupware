// ログインフォームの初期状態
const initLoginState = {
    userName: '',
    password: ''
};

// ログインフォームのリデューサー
export default function loginReducer (state = initLoginState, action){
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