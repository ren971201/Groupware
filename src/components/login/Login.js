import { createCognitoUser } from '../../../config'

// ログイン処理
function login(username, password, onSuccess, onFailure) {
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: username,
        Password: password
    });

    var cognitoUser = createCognitoUser(username);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: onSuccess,
        onFailure: onFailure
    });
}

// サインインボタンを押下したときの処理
export default function handleLognin(username, password) {
    login(username, password,
        // サインイン成功処理
        function signinSuccess() {
            console.log('Successfully Logged In');
            window.location.href = 'top';
        },
        function signinError(err) {
            alert(err);
        }
    );
}

