import Counter from "./components/Counter";
import Nation from "./components/nationList/Nation";
import Stopwatch from "./components/Stopwatch";

const Study = () => {
  return (
    <div style={{maxWidth:"500px"}}>
      <h1>240826 강의</h1>
      <Stopwatch />
      <Nation />
      <Counter />
    </div>
  );
};

export default Study;
