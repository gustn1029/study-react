import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };
  //count가 변했을때 동작할 행동을 useEffect를 이용해 구현
  useEffect(() => {
    if (count > 0) {
      if (count % 2) {
        alert("홀수입니다");
      } else {
        alert("짝수입니다");
      }
    }
  }, [count]);
  return (
    <>
      <div>{count}</div>
      <button onClick={countUp}>up!</button>
    </>
  );
}
