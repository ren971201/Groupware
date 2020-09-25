export default function changeVerifyForm(userName, code) {
    return {
        type: 'CHANGE_VERIFY_FORM',
        userName: userName,
        code: code
    }
}