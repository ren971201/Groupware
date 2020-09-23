window._config = {
    cognito: {
        userPoolId: 'ap-northeast-1_nJhCpG8q8', // ブールID
        userPoolClientId: '6ljmlu5v0t3q6sv093a6m8h5rv', // アプリクライアントID
        region: 'ap-northeast-1'
    },
    api: {
        invokeUrl: ''
    }
};

export const loginUrl = '/';

const poolData = {
    UserPoolId: _config.cognito.userPoolId,
    ClientId: _config.cognito.userPoolClientId
};

export const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

// ユーザーデータを返す
export function createCognitoUser(user_name) {
    return new AmazonCognitoIdentity.CognitoUser({
        Username: user_name,
        Pool: userPool
    });
}