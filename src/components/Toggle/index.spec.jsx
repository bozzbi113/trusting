import React from "react"
import { shallow } from "enzyme"
import Toggle from "./index"

describe("<Toggle />", () => {
  const wrapper = shallow(<Toggle />)
  it("3 images tag", () => {
    expect(wrapper.find("img").length).toEqual(3)
  })
})
