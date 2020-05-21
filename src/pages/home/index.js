import React from "react"
import BaseAutocomplete from "../../components/base/BaseAutocomplete"
import "./style.scss"
const Home = () => {
  return (
    <div className="home">
      <BaseAutocomplete
        suggestions={["Vietnam", "China", "Indian", "Chile", "Canada", "Japan"]}
      />
    </div>
  )
}

export default Home
