import React from 'react'
import './Projects.css'
import tac from '../../assets/tic-tac-toe.png'
import weather from '../../assets/clouds-and-sun.png'
import calculator from '../../assets/calculator.png'
import rock from '../../assets/rock-paper-scissors.png'

const Projects = () => {
  return (
    <>
      <section id='projects'>
        <div className="title"><h1>Projects</h1></div>
        <span className='projectdesc'>Over the course of my studies and self-learning, I have successfully completed several web development projects that demonstrate my proficiency in front-end and back-end technologies.Throughout these projects, I have gained hands-on experience with core web technologies such as HTML, CSS, JavaScript, and React. I have implemented responsive designs to ensure compatibility across devices and have focused on creating user-friendly interfaces with smooth navigation and interactive features.
        </span>
        <div className="cards">
          <div className="card">
            <h1 className='cardtitle'>TIC-TAC-TOE</h1>
            <img src={tac} alt="tic-tac-toe" className='iconimg' />
            <div className="projectlink"><button className='pbtn'><a href="https://github.com/Yashwanth1515/TIC-TAC-TOE" >Project link</a></button></div>
          </div>
          <div className="card">
            <h1 className='cardtitle'>WEATHER APP</h1>
            <img src={weather} alt="tic-tac-toe" className='iconimg' />
            <div className="projectlink"><button className='pbtn'><a href="https://github.com/Yashwanth1515/Simple-weather-app" >Project link</a></button></div>
          </div>
          <div className="card">
            <h1 className='cardtitle'>CALCULATOR</h1>
            <img src={calculator} alt="tic-tac-toe" className='iconimg' />
            <div className="projectlink"><button className='pbtn'><a href="https://github.com/Yashwanth1515/simple-calculator">Project link</a></button></div>
          </div>
          <div className="card">
            <h1 className='cardtitle'>ROCK-PAPER-SCISSOR</h1>
            <img src={rock} alt="tic-tac-toe" className='iconimg' />
            <div className="projectlink"><button className='pbtn'><a href="https://github.com/Yashwanth1515/Rock-Paper-scissor">Project link</a></button></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
