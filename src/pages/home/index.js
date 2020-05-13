import React, { useState, useCallback, useMemo } from "react"

import { useHistory } from "react-router-dom"
import Counter from "../../components/Counter"

function viewCount(count) {
  return count
}
const Home = () => {
  let [count, setCount] = useState(0)
  let [count2, setCount2] = useState(0)
  let history = useHistory()

  const handleOnclick = useCallback(() => {
    setCount((prevState) => (prevState = prevState + 1))
  }, [])

  const renderDataUseMemo = useMemo(() => {
    return <div>{count2} </div>
  }, [count2])

  const renderDataUseCallBack = useCallback(viewCount(count2), [])

  return (
    <div>
      Home
      {count}
      {renderDataUseMemo}
      {renderDataUseCallBack}
      <Counter handleOnclick={handleOnclick} />
      <Counter handleOnclick={handleOnclick} />
      <button
        onClick={() => {
          history.push("/product")
        }}
      >
        Product
      </button>
    </div>
  )
}

export default Home
