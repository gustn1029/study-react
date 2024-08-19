import { useState } from "react";
import "./feeling.css";
import FeelingList from "./components/FeelingList";
import DisplayFeeling from "./components/DisplayFeeling";

const Feeling = () => {
  const [feeling, setFeeling] = useState("");
  const buttonData = [
    "좋아요! 😀",
    "정말 좋아요! 😄",
    "최고에요! 😁",
    "미쳤어요!! 😆",
  ];

  return (
    <>
      <h2>실습2</h2>
      <FeelingList data={buttonData} feeling={feeling} setFeeling={setFeeling} />
      <DisplayFeeling feeling={feeling} />
    </>
  );
};

export default Feeling;
