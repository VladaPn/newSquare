import React from 'react'
import './Projects.css'
import rec from '../../assets/vr.png';
import crypto from '../../assets/crypto.png';
import edu from '../../assets/edu1.png'

const Projects = () => {
  return (
    <div className='projects'>
        <div className="container">
      <div className="separator">
        <h4>projects</h4><div className="line"></div>
      </div>
      <div className="inner-container">
        <div className="card">
<img src={edu} alt='project picture' />
<div className="inner-text">
<p className="tech">HTML CSS React</p>
            <h5>Edusity</h5>
            <p>Complete responsive website for private Edusity college made using React. </p>
            <div className="links-div">
            <a href="https://educity-vlada.vercel.app/" target='_blank' className='live-a'>live</a>
            <a href="https://educity-vlada.vercel.app/" target='_blank' className='more'>more...</a>
            </div>
            </div>
        </div>
        <div className="card">
<img src={crypto} alt='project picture' />
<div className="inner-text">
<p className="tech">HTML CSS React API</p>
            <h5>Cryptoplace</h5>
            <p>Crypto value converter built with React JS and Coin Gecko API.</p>
            <div className="links-div">
            <a href="https://cryptoplace-two.vercel.app/" target='_blank' className='live-a'>live</a>
            <a href="https://educity-vlada.vercel.app/" target='_blank' className='more'>more...</a>
            </div>
            </div>
        </div>
        <div className="card">
<img src={rec} alt='project picture' />
<div className="inner-text">
<p className="tech">HTML Tailwing React</p>
            <h5>VirtualR</h5>
            <p>Landing page for virtual reality tools company, made for developers. Made with React + Tailwind CSS.  </p>
            <div className="links-div">
            <a href="https://vercel.com/vladapns-projects/virtual-r"  target='_blank' className='live-a'>live</a>
            <a href="https://educity-vlada.vercel.app/" target='_blank' className=' more'>more...</a>
            </div>
            </div>
        </div>
      </div>
      <a href="" className="view-more">View more</a>
      </div>
    </div>
  )
}

export default Projects
