import React from "react"
import Enzyme, { shallow } from "enzyme"
import Header from "./index"

it("renders without crashing", () => {
  shallow(<Header />)
})

it("renders Become a host", () => {
  const wrapper = shallow(<Header />)
  const content = <li>Become a host</li>
  expect(wrapper.contains(content)).toEqual(true)
})

it("renders Help", () => {
  const wrapper = shallow(<Header />)
  const content = <li>Help</li>
  expect(wrapper.contains(content)).toEqual(true)
})

it("renders Sign up", () => {
  const wrapper = shallow(<Header />)
  const content = <li>Sign up</li>
  expect(wrapper.contains(content)).toEqual(true)
})

it("renders Login", () => {
  const wrapper = shallow(<Header />)
  const content = <li>Become a host</li>
  expect(wrapper.contains(content)).toEqual(true)
})

it("Should renders 5 li for menu", () => {
  const wrapper = shallow(<Header />)
  expect(wrapper.find("li").length).toEqual(5)
})

it("Should renders 5 li for menu", () => {
  const wrapper = shallow(<Header />)
  expect(wrapper.find("li").length).toEqual(5)
})
