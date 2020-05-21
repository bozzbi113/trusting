import React from "react"
import { shallow } from "enzyme"
import BaseAutocomplete from "./index"

describe("<BaseAutocomplete />", () => {
  const wrapper = shallow(<BaseAutocomplete />)

  it("BaseAutocomplete renders without crashing", () => {
    wrapper
  })

  it("Shallow rendering", () => {
    const wrapper = shallow(<BaseAutocomplete />)
    expect(wrapper.state("activeSuggestion")).toBe(0)
    expect(wrapper.state("filteredSuggestions")).toStrictEqual([])
    expect(wrapper.state("showSuggestions")).toBe(false)
    expect(wrapper.state("userInput")).toBe("")
  })
})
