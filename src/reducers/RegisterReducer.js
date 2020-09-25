// 登録フォームの初期状態
const initRegisterState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
};

// 登録フォームのリデューサー
export default function registerReducer (state = initRegisterState, action){
    switch (action.type) {
        case 'CHANGE_REGISTER_FORM':
            return {
                username: action.username,
                email: action.email,
                password: action.password,
                confirmPassword: action.confirmPassword
            };
        
        default:
            return state;
    }
}