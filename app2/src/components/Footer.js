import React from 'react'

const Footer = ({courses}) => {
  return (
    <div>
      {
        courses.map((course,index)=><h1>{index+1} {course}</h1>)
      }
    </div>
  )
}

export default Footer
