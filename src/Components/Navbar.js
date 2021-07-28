import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Navbar = () => {
  const [active, setactive] = useState('About')
  useEffect(() => {
    let currUrl = window.location.href
    console.log(currUrl)
    if (currUrl.endsWith('/')) {
      setactive('About')
    } else if (currUrl.endsWith('/projects')) {
      setactive('Projects')
    } else if (currUrl.endsWith('/resume')) {
      setactive('Resume')
    }
  }, [active])

  const navbar_variant = {
    hidden: {
      y: '-30vh',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      tarnsition: {
        delay: 0.2,
        duration: 0.7,
        type: 'spring',
      },
    },
  }

  return (
    <motion.div
      className='navbar'
      variants={navbar_variant}
      initial='hidden'
      animate='visible'
    >
      <div className='navbar__active'>{active}</div>
      <div className='navbar__items'>
        {active !== 'About' && (
          <Link to='/'>
            <div className='navbar__item' onClick={() => setactive('About')}>
              About
            </div>
          </Link>
        )}
        {active !== 'Resume' && (
          <Link to='/resume'>
            <div className='navbar__item' onClick={() => setactive('Resume')}>
              Resume
            </div>
          </Link>
        )}
        {active !== 'Projects' && (
          <Link to='/projects'>
            <div className='navbar__item' onClick={() => setactive('Projects')}>
              Projects
            </div>
          </Link>
        )}
      </div>
    </motion.div>
  )
}

export default Navbar
