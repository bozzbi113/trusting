import { useEffect, useState } from "react"
const DEVICE_TYPE = {
  MOBILE: "mobile",
  TABLET: "tablet",
  DESKTOP: "desktop",
}
const DEVICE_SIZE = {
  XS: 768,
  MD: 991,
}

export const useDevice = () => {
  const [width, setWidth] = useState(window.innerWidth)

  const checkDevice = (width) => {
    let type = ""

    if (width < DEVICE_SIZE.XS) {
      type = DEVICE_TYPE.MOBILE
    } else if (width >= DEVICE_SIZE.XS && width <= DEVICE_SIZE.MD) {
      type = DEVICE_TYPE.TABLET
    } else {
      type = DEVICE_TYPE.DESKTOP
    }
    return {
      isMobile: type === DEVICE_TYPE.MOBILE,
      isTablet: type === DEVICE_TYPE.TABLET,
      isDesktop: type === DEVICE_TYPE.DESKTOP,
    }
  }
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return checkDevice(width)
}
