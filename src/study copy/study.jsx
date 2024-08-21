import { useState } from "react";
import SimpleRouter from "./components/SimpleRouter";
import styled, { css } from "styled-components";
import CustomButtons from "./components/CustomButtons";
import StyledButton from "./components/StyledButton";

const ContentOne = styled.div`
  margin: 40px;
`;

const ContentTwo = styled.div`
  color: red;
`;

const ContentThree = styled(ContentTwo)`
  border: 1px solid black;
`;

const One = css`
  color: red;
`;

const Two = css`
  border: 1px solid black;
`;

const Three = styled.div`
  ${One}
  ${Two}
`

const Study = () => {
  const authorityData = ["admin", "user", "guest"];
  const randomIdx = Math.floor(Math.random() * authorityData.length);
  const [authority, setAuthority] = useState(authorityData[randomIdx]);
  return (
    <div>
      <h1>240821 강의</h1>
      <span>hi</span>
      <SimpleRouter authority={authority} />
      <ContentOne>hello world</ContentOne>
      <ContentTwo>hello world</ContentTwo>
      <ContentThree>hello world</ContentThree>
      <Three>Lorem ipsum dolor</Three>
      <CustomButtons />
      <StyledButton />
    </div>
  );
};

export default Study;
