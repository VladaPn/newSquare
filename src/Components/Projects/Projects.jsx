import React from 'react'
import './Projects.css'
import rec from '../../assets/rec.png';

const Projects = () => {
  return (
    <div className='projects'>
        <div className="container">
      <div className="separator">
        <h4>projects</h4><div className="line"></div>
      </div>
      <div className="inner-container">
        <div className="card">
<img src={rec} alt='project picture' />
<div className="inner-text">
<p className="tech">HTML CSS React</p>
            <h5>Project 1</h5>
            <p>Project description</p>
            <a href="" className='live-a'>live</a>
            </div>
        </div>
        <div className="card">
<img src={rec} alt='project picture' />
<div className="inner-text">
<p className="tech">HTML CSS React</p>
            <h5>Project 1</h5>
            <p>Project description</p>
            <a href="" className='live-a'>live</a>
            </div>
        </div>
        <div className="card">
<img src={rec} alt='project picture' />
<div className="inner-text">
<p className="tech">HTML CSS React</p>
            <h5>Project 1</h5>
            <p>Project description</p>
            <a href="" className='live-a'>live</a>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects
