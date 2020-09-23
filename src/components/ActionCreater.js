export function changeLoginForm(userName, password) {
    return {
        type: 'CHANGE_LOGIN_FORM',
        userName: userName,
        password: password
    }
}

export function changeRegisterForm(userName, email, password, confirmPassword) {
    return {
        type: 'CHANGE_REGISTER_FORM',
        userName: userName,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }
}

export function changeVerifyForm(userName, code) {
    return {
        type: 'CHANGE_VERIFY_FORM',
        userName: userName,
        code: code
    }
}