import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    //state의 초기값 설정하기ㅣ
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number, fixedNumber } = this.props; //state를 조회할 때는 this.stateㅣ로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는값: {fixedNumber}</h2>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            //this.setState사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default MyComponent;
