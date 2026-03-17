import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () => {
  const person={
    id:1,
    name:"Sree",
    course:"ReactJs",
    place:"Ongole",
  }
  return (
    <div>
      <Header title={"TIT"} description={"Telugu IT Tutorials"}/>
      <Body person={person}/>
      <Footer courses={["Java","Pythobn","ReactJs"]}/>
    </div>
  )
}

export default App
