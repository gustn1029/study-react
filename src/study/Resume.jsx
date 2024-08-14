
const Resume = (props) => {
  return (
    <div>
        <h2>{props.name} 자기소개서</h2>
        <strong>{props.hello}</strong>
        <p><em>취미</em>: {props.hobby}</p>
        <p><em>좋아하는 음식</em>: {props.food}</p>
        <p><em>좋아하는 색</em>: <span style={{color: props.color}}>{props.color}</span></p>
    </div>
  )
}

export default Resume