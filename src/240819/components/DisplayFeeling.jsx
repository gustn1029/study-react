import React from "react";

const DisplayFeeling = (props) => {
  return (
    <p className="feeling">
      {props.feeling
        ? `기분이 ${props.feeling}`
        : "아직 기분이 선택되지 않았어요..."}
    </p>
  );
};

export default DisplayFeeling;
