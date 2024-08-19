const ListComponent = () => {
  const list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: false },
    { no: 3, area: "목포", visited: true },
    { no: 4, area: "제주도", visited: false },
  ];
  return (
    <ul style={{ border: "1px solid black", listStyle:"none", padding:0 }}>
      {list.map((el, i) => (
        <li
          key={`${el.no}__${el.area}`}
          style={{
            borderTop: i > 0 ? "1px solid black" : "",
            backgroundColor: el.visited ? "royalblue": "",
            color: el.visited ? "white": "black",
          }}
        >
          {el.area}
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
