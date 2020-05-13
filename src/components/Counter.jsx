import React from "react"

const Counter = React.memo((props) => {
  const { handleOnclick } = props
  return (
    <div>
      Counter components
      <button onClick={handleOnclick}>Click me</button>
    </div>
  )
})
Counter.displayName = "Counter"
export default Counter
