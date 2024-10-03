import './Header.css'
import { me } from '../../assets'
import SocialHandles from '../../components/SocialHandles'
import { Link } from 'react-scroll'
import Points from '../../components/Points'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
const Header = () => {
  const container: any = useRef()
  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.5
        })
        .from('.points', {
          opacity: 0,
          y: 30
        })
        .from('.me', {
          opacity: 0,
          scale: 0.7
        })
        .from(['.user__info .sub__title', '.user__info .description'], {
          opacity: 0,
          y: 20
        })
        .from('.user__info .title', {
          opacity: 0,
          x: -30
        })
        .from(['.user__info .buttons'], {
          opacity: 0,
          x: -30
        })
        .from('.points .point', {
          opacity: 0,
          x: -30,
          stagger: 0.5
        })
    },
    { scope: container }
  )

  return (
    <section id="header" ref={container} className="bg__secondary">
      <div className="spotlight" />

      <div className="container">
        <div className="grid">
          <div className="me">
            <img src={me} alt="" />
          </div>
          <div className="user__info">
            <h2 className="sub__title">Hi 👋, I'm Emmanuel</h2>
            <h1 className="title">Frontend Developer</h1>
            <p className="description">
              I specialize in building modern, responsive, and user-friendly web interfaces. With a
              passion for clean code and seamless user experiences, I turn ideas into digital
              solutions that not only look great but also perform flawlessly. Let’s work together to
              bring your vision to life!
            </p>
            <div className="flex buttons">
              <SocialHandles />
              <Link to="contact" smooth className="btn btn__primary">
                Contact Me
              </Link>
            </div>
          </div>
          <Points />
        </div>
      </div>
    </section>
  )
}

export default Header
