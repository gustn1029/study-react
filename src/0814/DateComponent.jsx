const DateComponent = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1) < 10 ? `0${(date.getMonth() + 1)}` : (date.getMonth() + 1);
    const day = date.getDate() < 10 ? `0${date.getDate()}`: date.getDate();
    const time = `${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초`

  return (
    <div style={{fontWeight:"bold", backgroundColor: "black", color: "white"}}>
        <div style={{color: "red"}}>년: {year}</div>
        <div>월/일 {month}/{day}</div>
        <div>시간: {time}</div>
    </div>
  )
}

export default DateComponent