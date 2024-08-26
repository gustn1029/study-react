import { useRef, useState } from "react";

export default function Stopwatch() {
  const startTime = useRef(0);
  const intervalIdRef = useRef(null);

  const [secondsPassed, setSecondsPassed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function handleStart() {
    if (isRunning) return;

    setIsRunning(true);
    const time = startTime === null ? Date.now() : Date.now() - secondsPassed;
    startTime.current = time;

    intervalIdRef.current = setInterval(() => {
      setSecondsPassed(Date.now() - startTime.current);
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalIdRef.current);
    setIsRunning(false);
  }

  function handleReset() {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
    startTime.current = null;
    setSecondsPassed(0);
    setIsRunning(false);
  }

  return (
    <>
      <h2>Time passed: {(secondsPassed / 1000).toFixed(3)}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
