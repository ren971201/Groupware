// 確認フォームの初期状態
const initVerifyState = {
    userName: '',
    code: ''
};

// 確認フォームのリデューサー
export default function verifyReducer (state = initVerifyState, action){
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