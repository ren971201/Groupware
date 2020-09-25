export default function changeRegisterForm(userName, email, password, confirmPassword) {
    return {
        type: 'CHANGE_REGISTER_FORM',
        userName: userName,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }
}