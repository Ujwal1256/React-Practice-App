import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const [target, setTarget] = useState(10); 
  const intervalRef = useRef(null);

  const start = () => setRunning(true);
  const stop = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setCount(0);
  };

  useEffect(() => {
    if (count === target && target > 0) {
      const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
      audio.play().catch(() => console.log("🔔 Target reached! (Sound failed to play)"));
      console.log("🔔 Target reached!");
      setRunning(false); 
    }
  }, [count, target]);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const handleTargetChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value > 0) {
      setTarget(value);
    }
  };

  return (
    <>
      <div>
        <h2>React Stopwatch with Target</h2>
      </div>

      <div className="displaytimer">
        <p>
          Count : <strong>{count}</strong> / Target: {target} seconds
        </p>
      </div>

      <div className="buttons">
        <button onClick={start} disabled={running} className="btn">
          Start
        </button>
        <button onClick={stop} disabled={!running} className="btn">
          Stop
        </button>
        <button onClick={reset}>Reset</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Set Target Time (seconds): </label>
        <input
          type="number"
          min="1"
          value={target}
          onChange={handleTargetChange}
        />
      </div>
    </>
  );
}

export default App;
