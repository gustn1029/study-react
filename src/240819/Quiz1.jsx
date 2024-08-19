import { useState } from "react";

const Quiz1 = () => {
  const [like, setLike] = useState("like");
  return (
    <>
      <h2>실습1</h2>
      <button onClick={() => setLike(like ? "": "like")}>click</button>
      <span>{like}</span>
    </>
  );
};

export default Quiz1;
