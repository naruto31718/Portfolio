import React from 'react'
import github from '../assets/icons/github.svg'

const ProjectCard = ({project: {name, image}}) => {
  return (
    <>
      <div className='projectrCard col-md-6 col-lg-4 my-4'>
        <figure className='projectCard__wrapper'>
          <a href='' target='_blank' rel='noopener noreferrer'>
            <img src={image} alt={name} className='projectCard__image' />
          </a>
          <div className='projectCard__title'>
            <a href='' target='_blank' rel='noopener noreferrer'>
              <img
                src={github}
                alt='github link'
                className='projectCard__icon'
              />
            </a>
            {name}
          </div>
        </figure>
      </div>
    </>
  )
}

export default ProjectCard
