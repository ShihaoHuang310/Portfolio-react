import { Link } from 'react-scroll'
import Logo from '../../components/Logo'
import SocialHandles from '../../components/SocialHandles'
import { footer } from '../../source'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="footer" className="">
      <div className="spotlight" />
      <div className="container">
        <div className="grid">
          <div className="col-2 column">
            <Logo />
            <p className="text__muted description">
              Crafting responsive, high-performance websites 🌐 with clean code 💻 and a
              user-focused approach 👥. Let’s build something amazing together 🚀.
            </p>
            <SocialHandles />
          </div>
          {footer.map((list, idx) => (
            <div className="column" key={idx}>
              <h3 className="group__name">{list.group}</h3>
              <div className="routes__container">
                {list?.routes.map((route: any, index) => (
                  <Link to={route?.id} smooth className="route__item" key={index}>
                    {route.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <article className="copyright">
          <h3>Copyright &copy; 2024 Mr. Adinuba. All rights reserved.</h3>
          <p className="text__muted">Built with love by Emmanuel Eze Adinuba A.K.A Mr Adinuba</p>
        </article>
      </div>
    </footer>
  )
}

export default Footer
