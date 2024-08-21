import React from "react";
import styled from "styled-components";

const buttonColor = {
  danger: "red",
  normal: "black",
  primary: "blue",
};

const buttonScale = {
  small: "scale(0.5)",
  large: "scale(1.5)",
};
const CustomButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "fullWith",
})`
  width: ${(props) => (props.fullWith ? "100%" : "")};
  padding: 20px;

  background-color: ${(props) =>
    buttonColor[props.color] ? buttonColor[props.color] : buttonColor.normal};
  transition: all 0.3s;

  &:hover {
    transform: ${(props) =>
      buttonScale[props.size] ? buttonScale[props.size] : ""};
  }
`;

const StyledButton = () => {
  return (
    <CustomButton fullWith="true" size="large" color="danger">
      custom button
    </CustomButton>
  );
};

export default StyledButton;
