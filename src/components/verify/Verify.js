import { loginUrl, createCognitoUser } from '../../../config'

// 確認処理
function verify(email, code, onSuccess, onFailure) {
    createCognitoUser(email).confirmRegistration(code, true, function confirmCallback(err, result) {
        if (!err) {
            onSuccess(result);
        } else {
            onFailure(err);
        }
    });
}

// 確認
export default function handleVerify(userName, code) {
    verify(userName, code,
        function verifySuccess(result) {
            console.log('call result: ' + result);
            console.log('Successfully verified');
            alert('Verification successful. You will now be redirected to the login page.');
            window.location.href = loginUrl;// ログイン画面へ遷移
        },
        function verifyError(err) {
            alert(err);
        }
    );
}