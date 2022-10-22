// 이전같이 <script>로 불러오는 게 아닌 node 모듈 시스템으로 npm에서 설치해둔 것, 외부 파일을 불러오기
const React = require('react');
const ReactDom = require('react-dom');
// 컴포넌트마다 .jsx 파일로 쪼개서 작성 > html에서 이들을 하나의 파일로 인식할 수 있도록 파일들을 합치기 필요 > webpack 사용
const WordRelay = require('./wordRelay');



ReactDom.render(<WordRelay/>, document.querySelector('#root'));