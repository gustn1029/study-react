import ColorText from "./ColorText";
import DateComponent from "./DateComponent";
import Fragments from "./Fragments";
import ListComponent from "./ListComponent";
import Resume from "./Resume";

const Study = () => {
  const items = [
    { id: 1, name: 'Apple', desc: '빨간건 사과' },
    { id: 2, name: 'Banana', desc: '바나나는 길어' },
    { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];
  return <div>
    <h1>240814 강의</h1>
    <DateComponent />
    <ListComponent />
    <Fragments data={items} />
    <Resume hello={'안녕하세요'} name={"개리"} hobby={"게임"} food={"고기"} color={"blue"} />
    <ColorText color="red" />
    <ColorText color="green" />
    <ColorText color="blue" />
  </div>;
};

export default Study;
