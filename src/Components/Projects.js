import React from 'react'

import bank from '../assets/icons/bank.jpg'
import churn from '../assets/icons/churn.svg'
import reactweb from '../assets/icons/reactweb.jpg'
import ecom from '../assets/icons/ecom.jpg'
import portfolio from '../assets/projects_images/portfolio.JPG'

import ProjectCard from './ProjectCard'
import {motion} from 'framer-motion'

const data_projects = [
  {
    name: 'Bank Management System using C++',
    image: bank,
  },

  {
    name: 'Small Frontend Websites using react',
    image: reactweb,
  },

  {
    name: 'Churn Prediction Model',
    image: churn,
  },

  {
    name: 'E-Commerce Site',
    image: ecom,
  },
  {
    name: 'Portfolio',
    image: portfolio,
  },
]

const project_variant = {
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

const Project = () => {
  return (
    <motion.div
      className='container projects'
      variants={project_variant}
      initial='hidden'
      animate='visible'
    >
      <div className='row'>
        {data_projects.map((proj) => (
          <ProjectCard project={proj}></ProjectCard>
        ))}
      </div>
    </motion.div>
  )
}

export default Project
