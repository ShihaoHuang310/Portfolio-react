import { useEffect, useState } from 'react'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import Header from './Sections/Header'
import NavBar from './Sections/NavBar'
import Projects from './Sections/Projects'
import Services from './Sections/Services'
import Testimonies from './Sections/Testimonies'
import Loader from './components/Loader'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      console.log('loading', loading)
    }, 1800)
    console.log('loading', loading)

    return () => clearTimeout(timer)
  }, [loading])
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <NavBar />
          <Header />
          <About />
          <Services />
          <Projects />
          <Testimonies />
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
