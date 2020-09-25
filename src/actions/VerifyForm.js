export default function changeVerifyForm(username, code) {
    return {
        type: 'CHANGE_VERIFY_FORM',
        username: username,
        code: code
    }
}