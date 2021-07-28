import React from 'react'
import {motion} from 'framer-motion'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/mc.svg'
import resume from '../assets/resume.pdf'

const SideBar = () => {
  const handleEmailme = () => {
    window.open('mailto:vk31718@gmail.com')
  }

  const sidebar_variant = {
    hidden: {
      x: '-20vw',
      // opacity: 0,
    },
    visible: {
      x: 0,
      // opacity: 1,
      tarnsition: {
        delay: 0.1,
        duration: 1,
        type: 'spring',
      },
    },
  }

  return (
    <>
      <motion.div
        className='side-component'
        variants={sidebar_variant}
        initial='hidden'
        animate='visible'
      >
        <img src={mightycoder} alt='' className='sidebar__avatar' />
        <div className='sidebar__name'>
          Vamsi
          <span> Krishna</span>
        </div>
        <div className='sidebar__item sidebar__title'>Student</div>
        <a href={resume} download='resume.pdf'>
          <div className='sidebar__item sidebar__resume'>
            <img src={tie} alt='' className='sidebar__icon' />
            Download Resume
          </div>
        </a>
        <figure className='sidebar__social-icons my-2'>
          <a href='https://www.facebook.com/vamsi.valluri.50'>
            <img src={facebook} alt='' className='sidebar__icon mr-3' />
          </a>
          <a href='https://www.instagram.com/vk_31718/'>
            <img src={instagram} alt='' className='sidebar__icon' />
          </a>
        </figure>
        <div className='sidebar__contact'>
          <div className='sidebar__item sidebar__github'>
            <a href='https://github.com/naruto31718'>
              <img src={github} alt='github' className='sidebar__icon mr-3' />
              Github
            </a>
          </div>
          <div className='sidebar__item sidebar__loaction'>
            <img src={pin} alt='location' className='sidebar__icon mr-3' />
            Pedapudi/India
          </div>
          <div className='sidebar__item sidebar__emailid'>
            vk31718@gmail.com
          </div>
          <div className='sidebar__item'>6303677725/8269292747</div>
        </div>
        <div
          className='sidebar__item sidebar__email'
          onClick={() => handleEmailme}
        >
          Email me
        </div>
      </motion.div>
    </>
  )
}

export default SideBar
