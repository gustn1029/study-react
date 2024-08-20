import React, { useState } from "react";
import PetInfoAdd from "./PetInfoAdd";
import PetList from "./PetList";

const data = [
  { name: "벨라", species: "고양이", age: "5", id: 111 },
  { name: "루시", species: "강아지", age: "3", id: 112 },
  { name: "데이지", species: "토끼", age: "2", id: 113 },
  { name: "몰리", species: "고양이", age: "1", id: 114 },
  { name: "매기", species: "강아지", age: "6", id: 115 },
];

export default function Pet() {
  const [petName, setPetName] = useState("");
  const [petSpecies, setPetSpecies] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petData, setPetData] = useState(data);

  const submitHandler = (e) => {
    e.preventDefault();
    const newData = {
      name: petName,
      species: petSpecies,
      age: petAge,
      id: petData[petData.length - 1].id + 1,
    };

    setPetData((prev) => [...prev, newData]);

    setPetName("");
    setPetSpecies("");
    setPetAge("");
  };
  return (
    <>
      <h2>애완동물 정보 리스트</h2>
      <PetInfoAdd
        petName={petName}
        setPetName={setPetName}
        petSpecies={petSpecies}
        setPetSpecies={setPetSpecies}
        petAge={petAge}
        setPetAge={setPetAge}
        submitHandler={submitHandler}
      />
      <PetList data={petData} />
    </>
  );
}
