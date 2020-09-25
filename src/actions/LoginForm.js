export default function changeLoginForm(username, password) {
    return {
        type: 'CHANGE_LOGIN_FORM',
        username: username,
        password: password
    }
}