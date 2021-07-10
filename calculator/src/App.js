function App() {
  return (
    <div className="App">
      <div className="display">
        <div className="formula">
          {/* 入力された計算式 */}
          {/* <p className="test">テスト</p> */}
        </div>
        <div className="result_box">
          {/* 計算結果 */}
          {/* <p className="test_2">テスト</p> */}
          <button className="copy_button">
            <img src="copy.jpeg" alt="" />
          </button>
          <div className="result">
            <p className="result_text">結果</p>
          </div>
        </div>
      </div>
      <div>
        <div className="first_stage">
          <button className="button">c</button>
          <button className="button">+/-</button>
          <button className="button">%</button>
          <button className="button">/</button>
        </div>
        {/*  */}
        <div className="second_stage">
          <button className="button">7</button>
          <button className="button">8</button>
          <button className="button">9</button>
          <button className="button">*</button>
        </div>
        {/*  */}
        <div className="third_stage">
          <button className="button">4</button>
          <button className="button">5</button>
          <button className="button">6</button>
          <button className="button">-</button>
        </div>
        {/*  */}
        <div className="fourth_stage">
          <button className="button">1</button>
          <button className="button">2</button>
          <button className="button">3</button>
          <button className="button">+</button>
        </div>
        {/*  */}
        <div className="fifth_stage">
          <button className="button">0</button>
          <button className="button">00</button>
          <button className="button">.</button>
          <button className="button">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
