import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import './Testimonies.css'
import { testimonies } from '../../source'
import { FaStar } from 'react-icons/fa'
import 'swiper/css'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Testimonies = () => {
  const settings: SwiperOptions = {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    speed: 5000,
    centeredSlides: true,
    breakpoints: {
      600: {
        slidesPerView: 'auto'
      }
    }
  }

  const container: any = useRef()
  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: '20% bottom',
            end: 'bottom top'
            // scrub: true
          }
        })
        .from('.section__header .sub__title', {
          opacity: 0,
          x: -30
        })
        .from('.testimonial', {
          opacity: 0,
          scale: 0.7,
          stagger: 0.5
        })
    },
    { scope: container }
  )
  return (
    <section id="testimonials" ref={container}>
      <div className="section__header">
        <h2 className="sub__title">
          What My <span className="primary">Clients</span> Says
        </h2>
      </div>
      <Swiper {...settings} className="testimonials">
        {testimonies.map((list, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="flex user">
              <div className="profile">
                <img src={list.profile} alt={list.name} />
              </div>
              <div className="details">
                <h3 className="name">{list.name}</h3>
                <div className="flex row">
                  <p className="text__meted position">{list.position}</p>
                  <p className="primary company">{list.company}</p>
                </div>
              </div>
            </div>

            <p className="text__muted content">{list.content}</p>
            <div className="flex__center stars__container">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonies
