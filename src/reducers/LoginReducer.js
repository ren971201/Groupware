// ログインフォームの初期状態
const initLoginState = {
    username: '',
    password: ''
};

// ログインフォームのリデューサー
export default function loginReducer (state = initLoginState, action){
    switch (action.type) {
        case 'CHANGE_LOGIN_FORM':
            return {
                username: action.username,
                password: action.password
            };
        
        default:
            return state;
    }
}