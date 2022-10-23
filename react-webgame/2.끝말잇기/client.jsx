const React = require('react');
const ReactDOM = require('react-dom');
// 컴포넌트마다 .jsx 파일로 쪼개서 작성 > html에서 이들을 하나의 파일로 인식할 수 있도록 webpack을 사용해서 하나의 파일(app.js)로 합치기
const WordRelay = require('./wordRelay-class');



ReactDOM.render(<WordRelay/>, document.querySelector('#root'));