import React from 'react'

const Title = (props) => {
  const { title } = props

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 10,
        fontSize: '3.5rem',
      }}>
      {title}
    </div>
  )
}

export default Title
