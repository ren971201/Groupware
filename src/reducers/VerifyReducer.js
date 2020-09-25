// 確認フォームの初期状態
const initVerifyState = {
    username: '',
    code: ''
};

// 確認フォームのリデューサー
export default function verifyReducer (state = initVerifyState, action){
    switch (action.type) {
        case 'CHANGE_VERIFY_FORM':
            return {
                username: action.username,
                code: action.code
            };
        
        default:
            return state;
    }
}