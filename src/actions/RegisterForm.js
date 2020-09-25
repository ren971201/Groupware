export default function changeRegisterForm(username, email, password, confirmPassword) {
    return {
        type: 'CHANGE_REGISTER_FORM',
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }
}