// 登録フォームの初期状態
const initRegisterState = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

// 登録フォームのリデューサー
export default function registerReducer (state = initRegisterState, action){
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