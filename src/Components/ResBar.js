import React from 'react'

const ResBar = ({lan}) => {
  const bar_width = `${lan.level}%`
  return (
    <>
      <div className='bar'>
        <div
          className='bar__wrapper'
          style={{
            width: bar_width,
          }}
        >
          <span className='bar__name'>
            <img src={lan.icon} alt='' className='bar__icon mr-2' />
            {lan.name}
          </span>
        </div>
      </div>
    </>
  )
}

export default ResBar
