import React from 'react'
import ricon from '../assets/icons/react.svg'
import ResBar from './ResBar'
import {motion} from 'framer-motion'

const languages = [
  {
    icon: ricon,
    name: 'Java',
    level: '80',
  },
  {
    icon: ricon,
    name: 'C++',
    level: '80',
  },
  {
    icon: ricon,
    name: 'JavaScript',
    level: '75',
  },
]

const tools = [
  {
    icon: ricon,
    name: 'Visual Studio Code',
    level: '90',
  },
  {
    icon: ricon,
    name: 'IntelliJ Idea',
    level: '80',
  },
  {
    icon: ricon,
    name: 'Adobe Photoshop',
    level: '90',
  },
]

const resume_variant = {
  hidden: {
    //  x: '-20vw',
    opacity: 0,
  },
  visible: {
    //  x: 0,
    opacity: 1,
    tarnsition: {
      delay: 0.2,
      duration: 6,
      //  type: 'spring',
    },
  },
}

const Resume = () => {
  return (
    <>
      <motion.div
        className='container resume'
        variants={resume_variant}
        initial='hidden'
        animate='visible'
      >
        <div className='row'>
          <div className='col-lg-6 resume-card'>
            <h4 className='resume-card__heading'>Education</h4>
            <div className='resume-card__body'>
              <ul>
                <li>
                  <h5 className='resume-card__title'>
                    Electronics and Communication Engineering
                  </h5>
                  <p className='resume-card__name'>NIT Raipur.</p>
                </li>
                <li>
                  <h5 className='resume-card__title'>Intertermediate</h5>
                  <p className='resume-card__name'>Sasi junior college.</p>
                </li>
                <li>
                  <h5 className='resume-card__title'>Secondary School</h5>
                  <p className='resume-card__name'>Dr.KKR Gowthams.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-6 resume-card'>
            <h4 className='resume-card__heading'>Work Experiencs</h4>
            <div className='resume-card__body'>
              <ul>
                <ul>
                  <li>
                    <h5 className='resume-card__title'>
                      Traning on WebDevelopment.
                    </h5>
                    <p className='resume-card__name'>Coursera</p>
                  </li>
                  <li>
                    <h5 className='resume-card__title'>
                      Traning on Machine Learning
                    </h5>
                    <p className='resume-card__name'>InternShala</p>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6 resume-lan'>
            <h5 className='resume-lan__heading'>Languages and FrameWorks</h5>
            <div className='resume-lan__body'>
              {languages.map((lang) => (
                <ResBar lan={lang}></ResBar>
              ))}
            </div>
          </div>
          <div className='col-lg-6 resume-lan'>
            <h5 className='resume-lan__heading'>Softwares and Tools</h5>
            <div className='resume-lan__body'>
              {tools.map((tool) => (
                <ResBar lan={tool}></ResBar>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Resume
