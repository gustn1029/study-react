import React from "react";
import styled, { css } from "styled-components";

const ButtonRounded = css`
  border-radius: ${(props) => `${props.rounded}px`};
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  border: 0;
`;

const CustomButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'bgColor',
})`
  background-color: ${(props) => props.bgColor ? props.bgColor : "royalblue"};
  padding: 20px;
  color: ${(props) => props.color};
  ${(props) => (props.rounded ? ButtonRounded : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
`;

const CustomButtons = () => {
  return (
    <>
      <CustomButton color="white">
        버튼1
      </CustomButton>
      <CustomButton weight={"bold"} rounded={10}>
        버튼2
      </CustomButton>
      <CustomButton weight={"bold"} bgColor="green" color="white" rounded={25}>
        버튼4
      </CustomButton>
    </>
  );
};

export default CustomButtons;
