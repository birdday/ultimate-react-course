import "./index.css";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <DualCounterWithText
        text="Step: "
        stateVar={step}
        setStateVar={setStep}
      />
      <DualCounterWithText
        text="Count: "
        increment={step}
        stateVar={count}
        setStateVar={setCount}
      />
      <Message step={step} count={count} />
    </div>
  );
}

function DualCounterWithText({ text, stateVar, setStateVar, increment = 1 }) {
  return (
    <div className="buttons">
      <button onClick={() => setStateVar(stateVar - increment)}>-</button>
      <div className="message">{`${text} ${stateVar} `}</div>
      <button text="+" onClick={() => setStateVar(stateVar + increment)}>
        +
      </button>
    </div>
  );
}

function Message({ step, count }) {
  const date = new Date("January 19 2024");
  date.setDate(date.getDate() + count);

  var messageText;
  if (count === 0) {
    messageText = "Today is: ";
  } else if (count < 0) {
    messageText = `${Math.abs(count)} days ago was: `;
  } else if (count > 0) {
    messageText = `${Math.abs(count)} days from today is: `;
  } else {
    messageText = "What day is it?!";
  }

  return (
    <div className="message">
      <span>{messageText}</span>
      <span>{date.toDateString()}</span>
    </div>
  );
}
