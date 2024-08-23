import React, { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  console.log("렌더링이 됩니다..?");

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  return (
    <>
      <h2>
        시간 : {hour}시 {min}분 {sec}초
      </h2>
    </>
  );
}
