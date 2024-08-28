import { useEffect } from "react";
import EffectTest from "./components/EffectTest";
import InputComponent from "./components/InputComponent";
import SomethingComponent from "./components/SomethingComponent";
import useScoll from "./Hooks/useScoll";

const Study = () => {
  const scroll = useScoll();
  useEffect(()=> {
    if(scroll) {
      alert("끝")
    }
  },[scroll])
  return (
    <div style={{height:"200vh"}}>
      <h1>240828 강의</h1>
      <EffectTest />
      <SomethingComponent />
      <InputComponent />
    </div>
  );
};

export default Study;
