import React from 'react'
import {motion} from 'framer-motion'

import cpp from '../assets/icons/cpp.png'
import java from '../assets/icons/java.jpg'
import sql from '../assets/icons/sql.png'
import dsa from '../assets/icons/dsa.png'
import mern from '../assets/icons/mern.jpg'
import SkillCard from './SkillCard'

const skills = [
  {
    icon: cpp,
    title: 'C++',
    about:
      'Learned Fundamentals of C++ and Object Oriented Programming Concepts in C++.',
  },
  {
    icon: java,
    title: 'JAVA',
    about: 'Learned Core Java and Object Oriented Programming in Java.',
  },
  {
    icon: dsa,
    title: 'Data Structures and Algorithms',
    about:
      'Learned fundamentals of Linear and Non-Linear Data Structures and has a good hold on various Algorithmic techniques like divide and conquer approach.',
  },
  {
    icon: sql,
    title: 'MySQL',
    about:
      'Has a good knowledge on the basics of the MYSql database manipulation language used for SQL databases.',
  },
  {
    icon: mern,
    title: 'Web Development',
    about: 'Development of Websites from front to back using MERN stack',
  },
]

const about_variant = {
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

const About = () => {
  return (
    <>
      <motion.div
        className='about'
        variants={about_variant}
        initial='hidden'
        animate='visible'
      >
        <h6 className='about__intro'>
          An extremely organized, empathetic, and resourceful individual seeking
          for a challenging career
        </h6>
        <div className='container about__container'>
          <h6 className='about__heading'>What I Have</h6>
          <div className='row'>
            {skills.map((skill) => (
              <SkillCard skill={skill}></SkillCard>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default About
