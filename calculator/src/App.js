function App() {
  return (
    <div className="App">
      <div>
        <div className="result">{/* 入力された計算式 */}</div>
        <div>{/* 計算結果 */}</div>
      </div>
      <div>
        <div className="first_stage">
          <button>c</button>
          <button>+/-</button>
          <button>%</button>
          <button>/</button>
        </div>
        {/*  */}
        <div className="second_stage">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>*</button>
        </div>
        {/*  */}
        <div className="third_stage">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>
        {/*  */}
        <div className="fourth_stage">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        {/*  */}
        <div ckassName="fifth_stage">
          <button>0</button>
          <button>00</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
