const FeelingItem = (props) => {
  return (
    <li>
      <button className={`btn ${props.className}`} onClick={props.onClick}>
        기분이: {props.text}
      </button>
    </li>
  );
};

export default FeelingItem;
