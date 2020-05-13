import React from "react"
import Home from "../pages/home"
import Product from "../pages/product"

const Product1 = () => {
  return <div>Product 1</div>
}
const Product2 = () => {
  return <div>Product 2</div>
}
const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/product",
    component: Product,
    routes: [
      {
        path: "/product/bus",
        component: Product1,
      },
      {
        path: "/product/cart",
        component: Product2,
      },
    ],
  },
]
export default routes
