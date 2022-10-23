// node의 module 시스템 고려
// 해당 컴포넌트 개발에 필요한 것들(패키지, 라이브러리)은 npm에서 불러오기
const React = require('react');
const {Component} = React; // 아래 React.Component를 Component로 줄일 수 있음

// 클래스 컴포넌트 방식으로 구현
// 파일 수정할 때마다 빌드해줘야 함 > 자동 빌드 설정
class WordRelay extends Component {
    state = {
        word : '고구마',
        value : '',
        result : '',
    };
    
    onSubmitForm = (e) => {
        e.preventDefault();
        // 끝말잇기 로직 구현
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]) { // 맞았을 때
          this.setState({
            result: '딩동댕',
            word: this.state.value, 
            value: '',
          });
          this.input.focus();
        } 
        else { // 틀렸을 때
          this.setState({
            result: '땡',
            value: '',
          });
          this.input.focus();
        }
    };
    
    onChangeInput = (e) => {
    this.setState({ value: e.target.value });
    };

    input;

    onRefInput = (c) => {
    this.input = c;
    };

    render(){
        // form 속 <input>에서 value와 onChange는 세트. defaultValue로도 대체 가능
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>클릭!!!</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

// 쪼개서 작성한 내용(컴포넌트)을 외부에서도 사용할 수 있게 해주는 코드
module.exports = WordRelay;