import React, {Component} from 'react';

function getNumbers() { // 숫자 4개를 겹치지 않고 랜덤하기 선택하는 함수

};

class NumberBaseball extends Component {
    // state 부분 : 결과, 입력칸
    state = {
        result : '',
        value : '',
        answer : getNumbers(), // 정답 : 맞춰야 할 숫자 조합(4개)
        tries : [], // 시도 횟수
    };
    // 추가로 필요한 (사용자 정의)함수 선언
    onChange = () => {

    };
    onSubmitForm = () => {

    };
    onChangeInput = () => {

    };

    render() {
        // raect에서 반복문 > map 대체
        // map을 이용해서 시도 내역들 출력
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도 횟수 : {this.state.tries.length}</div>
                <div>시도 내역</div>
                <ul> 
                    {this.state.tries.map((v)=>{
                        return (
                            <li>{v}</li>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball; // 외부에 import될 때 파일이름