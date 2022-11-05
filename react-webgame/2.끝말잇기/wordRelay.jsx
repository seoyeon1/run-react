const React = require('react');
const { useState } = React;

// 기존 클래스 방식으로 작성한 것을 hooks로 다시 작성

const WordRelay = () => {
  // state 부분
  const [word, setWord] = useState('고구마');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = React.useRef(null);

  // 필요한 메소드 선언
  const onSubmitForm = (e) => {
    e.preventDefault();

    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      inputEl.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputEl.current.focus();
    }
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl} // value가 오직 onsubmit에서만 사용되는 경우, uncontrolled input방식도 가능
          value={value} // controlled input(권장)
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;