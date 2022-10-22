// webpack 설정 파일. webpack : 작성한 컴포넌트(파일)들을 하나로 합쳐주는 역할
const path = require('path'); // 경로를 쉽게 조작할 수 있도록 node에서 제공
const { env } = require('process');

module.exports = {
    name : 'wordrelay-setting', // webpack 설정 이름
    mode : 'development', // 개발용. 실서비스일 때 > production
    devtool : 'eval', // 빠르게
    resolve : {
        extensions : ['.js', '.jsx'] // 웹팩이 폴더에 client.js나 client.jsx가 있는지 찾고 알아서 client.jsx를 불러와 처리 > 아래 app에서 파일 확장자 생략 가능
    },

    // ** 아래 요소가 가장 중요 ** : entry에 파일들을 읽어와 모듈을 적용한 후, 하나의 파일로 출력
    entry : { // 입력
        app : ['./client'], // 파일들을 합쳐서 app.js라는 하나의 파일로 만들어줌('./wordRelay.jsx'는 client.jsx에서 불러왔기 때문에 따로 또 안적어줘도 됨(react, reactDom도 마찬가지))
    }, 
    module : {
        rules : [{ // 여러 개의 규칙 적용 가능(배열로 선언)
            test : /\.jsx?/, // 1. 규칙을 적용시킬 파일들 : .js / .jsx
            loader : 'babel-loader', // 2. .js/.jsx에 바벨을 적용 > 최신 문법을 옛날 브라우저에도 호환 가능하게 
            options : { // 3. 바벨의 옵션 적용
                presets : ["@babel/preset-env","@babel/preset-react"],
            },
        }],
    },
    output : { // 출력
        path : path.join(__dirname, 'dist'), // path.join() : 경로를 합쳐줌 > 현재폴더(lectures)\희망폴더(dist)
        filename : 'app.js',
    },

};