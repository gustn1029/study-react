import FragmentItem from "./FragmentItem";

const Fragments = (props) => {
    return (
        <dl>
            {props.data.map((el) => (
                <FragmentItem key={el.id} id={el.id} name={el.name} desc={el.desc} />
            ))}
        </dl>
    );
}

export default Fragments;