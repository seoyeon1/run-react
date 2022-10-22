const React = require('react'); // 기존의 script 방식이 아닌 node의 모듈 시스템을 사용해서 require로 불러오기
const {useState, useRef} = React;

const GuGuDan = () => { 
    
    // hooks에서 state 선언 : 각각 [state, setState] 분리해서 선언&초기화. 컴포넌트 안에서 선언해줘야 함
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9)); // 구조분해 문법 
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState(''); // useState가 hooks
    const [result, setResult] = useState('');
    // ref 사용 & 초기화
    const inputRef = useRef(null);

    // 이벤트 리스너 추가
    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    // console.log('렌더링');

    const onSubmitForm = (e) => {
      e.preventDefault();
      // state 변경 : 기존 class 방식의 setState를 각각의 setState에 맞춰 바꿔주면 됨
      if (parseInt(value) === first * second) {
        setResult('정답'); // 여기서도 setStete할 때 함수로 이전 state값을 활용 가능
        setFirst(Math.ceil(Math.random() * 9));
        setSecond(Math.ceil(Math.random() * 9));
        setValue('');
        inputRef.current.focus();
      }
      else {
        setResult('땡');
        setValue('');
        inputRef.current.focus();
      }
    };

    // 화면 부분
    return (
      <>
        <div>{first} 곱하기 {second} 는?</div>
        <form onSubmit={onSubmitForm}>
          <input
            ref={inputRef}
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button>입력!</button>
        </form>
        <div id="result">{result}</div>
      </>
    );
};

module.exports = GuGuDan; // 파일이 다른 곳에서 쓰이기 위해서