import { Fragment } from "react";

// FragmentItem.jsx
const FragmentItem = ({ id, name, desc }) => {
    return (
        <Fragment key={`${id}__${name}`}>
            <dt>{name}</dt>
            <dd>{desc}</dd>
        </Fragment>
    );
}

export default FragmentItem;