import { createCognitoUser } from '../../../config'

// ログイン処理
function login(userName, password, onSuccess, onFailure) {
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: userName,
        Password: password
    });

    var cognitoUser = createCognitoUser(userName);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: onSuccess,
        onFailure: onFailure
    });
}

// サインインボタンを押下したときの処理
export default function handleLognin(state) {
    var userName = state.userName;
    var password = state.password;
    login(userName, password,
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

