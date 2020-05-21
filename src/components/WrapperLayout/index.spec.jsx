import React from "react"
import { shallow } from "enzyme"
import WrapperLayout from "./index"
it("WrapperLayout renders without crashing", () => {
  shallow(<WrapperLayout />)
})
