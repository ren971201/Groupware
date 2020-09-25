export default function changeLoginForm(userName, password) {
    return {
        type: 'CHANGE_LOGIN_FORM',
        userName: userName,
        password: password
    }
}