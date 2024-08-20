import Pet from "./components/Pet";
import UserList from "./components/UserList";

const Study = () => {
  const data = [
    { id: 1, name: "Alice", email: "alice@example.com", job: "Engineer" },
    { id: 2, name: "Bob", email: "bob@example.com", job: "Designer" },
    { id: 3, name: "Charlie", email: "charlie@example.com", job: "Manager" },
  ];
  return (
    <div>
      <h1>240820 강의</h1>
      <UserList data={data} />
      <Pet />
    </div>
  );
};

export default Study;
