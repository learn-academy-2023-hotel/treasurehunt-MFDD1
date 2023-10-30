import React from "react"

const Square = ({value, index}) => {
  // destructuring props
  // const { value } = props; is the same as props.value
  // instead pass the destructed calue through

  return (
    <>
      <div className="square">{value}</div>
      
    </>
  )
}
export default Square
