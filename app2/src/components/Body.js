import React from 'react'

const Body = ({person}) => {
const {id,name,course,place}=person;
  return (
    <div>
      <h1>ID:{id}</h1>
      <h1>Name:{name}</h1>
      <h1>Course:{course}</h1>
      <h1>Place:{place}</h1>
    </div>
  )
}

export default Body
