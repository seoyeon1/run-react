// node의 module 시스템 고려
// 해당 컴포넌트 개발에 필요한 것들(패키지, 라이브러리)은 npm에서 불러오기
const React = require('react');
const {Component} = React; // 아래 React.Component를 Component로 줄일 수 있음

class WordRelay extends Component {
    state = {};
    render(){

    }
}

// 쪼개서 작성한 내용(컴포넌트)을 외부에서도 사용할 수 있게 해주는 코드
module.exports = WordRelay;