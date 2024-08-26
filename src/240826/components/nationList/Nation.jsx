import React, { useEffect, useState } from "react";
import NationList from "./NationList";
import styled from "styled-components";

const NationButton = styled.button`
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  cursor: pointer;
`;

const Nation = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/nations");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);

        if (res.ok) {
          const json = await res.json();

          setData(json);
        } else {
          alert(`데이터를 받아오는 데 실패했습니다.\n${res.statusText}`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  const allListClickHandler = () => {
    setUrl(`http://localhost:3000/nations`);
  };

  const europeListClickHandler = (loc) => {
    setUrl(`http://localhost:3000/nations?loc=${loc}`);
  };
  return (
    <>
      <h2>나라 목록</h2>
      <NationList data={data} />
      <div style={{ textAlign: "right" }}>
        <NationButton onClick={allListClickHandler}>전체 목록</NationButton>
        <NationButton onClick={() => europeListClickHandler("europe")}>
          유럽 목록
        </NationButton>
      </div>
    </>
  );
};

export default Nation;
