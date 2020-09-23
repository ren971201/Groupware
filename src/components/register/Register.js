import { userPool } from '../../../config'

// 登録処理
function register(user_name, email, password, onSuccess, onFailure) {
    var dataEmail = {
        Name: 'email',
        Value: email
    };
    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

    userPool.signUp(user_name, password, [attributeEmail], null,
        function signUpCallback(err, result) {
            if (!err) {
                onSuccess(result);
            } else {
                onFailure(err);
            }
        }
    );
}

// 登録ボタンを押下
export default function handleRegister(userName, email, password, confirmPassword) {
    var onSuccess = function registerSuccess(result) {
        var cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
        var confirmation = ('Registration successful. Please check your email inbox or spam folder for your verification code.');
        if (confirmation) {
            window.location.href = 'verify';
        }
    };
    var onFailure = function registerFailure(err) {
        alert(err);
    };

    if (password === confirmPassword) {
        register(userName, email, password, onSuccess, onFailure);
    } else {
        alert('Passwords do not match');
    }
}