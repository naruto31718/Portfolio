import React from 'react'

const SkillCard = ({skill}) => {
  return (
    <div className='col-lg-6'>
      <div className='skill-card'>
        <img src={skill.icon} alt='' className='skill-card__icon' />
        <div className='skill-card-body'>
          <div className='skill-card__title'>{skill.title}</div>
          <p className='skill-card__content'>{skill.about}</p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
