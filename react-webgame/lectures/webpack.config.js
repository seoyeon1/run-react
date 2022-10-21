// webpack 설정 파일. webpack : 작성한 컴포넌트(파일)들을 하나로 합쳐주는 역할
const path = require('path'); // 경로를 쉽게 조작할 수 있도록 node에서 제공

module.exports = {
    name : 'wordrelay-setting', // webpack 설정 이름
    node : 'development', // 개발용. 실제 서비스일 때 > production
    devtool : 'eval', // 빠르게
    // ** 아래 요소가 가장 중요 **
    entry : { // 입력
        
    }, 
    output : { // 출력
        path : path.join(__dirname, 'dist'), // path.join() : 경로를 합쳐줌 > 현재폴더\희망폴더
        filename : 'app.js',
    },

};