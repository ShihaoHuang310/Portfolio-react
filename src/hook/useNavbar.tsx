import { useEffect, useState } from 'react'

const UseNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const toggleNavbar = () => {
    if (window.scrollY > 100) {
      setShowNavbar(true)
    } else {
      setShowNavbar(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleNavbar)
    return () => {
      window.removeEventListener('scroll', toggleNavbar)
    }
  })
  return { showNavbar }
}

export default UseNavbar
