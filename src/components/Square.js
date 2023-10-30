import React from "react"

const Square = ({value, index, handleSquareClick}) => {
  const handleClick = () => {
    handleSquareClick(index)
  }

  // destructuring props
  // const { value } = props; is the same as props.value
  // instead pass the destructed calue through

  return (
    <>
      <div className="square" onClick={handleClick}>
        {value}
      </div>
    </>
  )
}
export default Square
