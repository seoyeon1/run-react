// webpack 설정 파일
const path = require('path');
const { env } = require('process');

module.exports = {
    mode : 'development', // 개발용. 실서비스일 때 > production
    devtool : 'eval', // 개발용. 실서비스 > hidden-source-map
    resolve : {
        extensions : ['.js', '.jsx'], // 아래 app에서 파일 확장자 생략 가능
    },

    // ** 아래 요소가 가장 중요 ** : entry에 파일들을 읽어와 모듈을 적용한 후, 하나의 파일로 출력
    entry : { // 입력
        app : './client', // 파일들을 합쳐서 app.js라는 하나의 파일로 만들어줌('./wordRelay.jsx'는 client.jsx에서 불러왔기 때문에 따로 또 안적어줘도 됨(react, reactDom도 마찬가지))
    }, 
    module : {
        rules : [{
            test : /\.jsx?/, // 1. 규칙을 적용시킬 파일들
            loader : 'babel-loader', // 2. .js/.jsx에 바벨을 적용 > 최신 문법을 옛날 브라우저에도 호환 가능하게 
            options : { // 3. 바벨에 옵션 적용 : 최소한으로 필요한 preset들만 사용. 에러발생 > 에러메시지 참고해서 추가로 플러그인 설치(why? package에 깔린 dependencies들이 너무 많으면 나중에 웹팩 빌드할 때 오래걸려서)
                presets : ["@babel/preset-env","@babel/preset-react"],
                // Plugins : [],
            },
        }],
    },
    output : { // 출력
        path : path.join(__dirname, 'dist'),
        filename : 'app.js',
    },

};