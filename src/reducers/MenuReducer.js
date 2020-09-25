// サイドメニューの初期状態
const initMenuState = {
    visible: false
}

// サイドメニューのレデューサー
export default function menuReducer(state = initMenuState, action) {
    switch(action.type){
        case 'INVERT_VISIBLE':
            if(action.visible){
                return ({
                    visible: false
                });
            }
            else if(!action.visible){
                return ({
                    visible: true
                });
            }
            
            return state;

        default:
            return state;
    }
}