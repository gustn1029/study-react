import React from 'react'
import FeelingItem from './FeelingItem'

const FeelingList = (props) => {
  return (
    <ul className='feelingList'>
       {props.data.map((el, i) => (
        <FeelingItem
          text={el}
          key={`${i}__feelingItem`}
          onClick={() => props.setFeeling(el)}
          className={el === props.feeling ? "on" : ""}
        />
      ))}
    </ul>
  )
}

export default FeelingList