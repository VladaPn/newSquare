import React from 'react'
import './Hero.css'
import hero_img from '../../assets/main.png'

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className="container">
				<div>
					<h3>
						<span className="enh">Vladimir</span> is a{" "}
						<span className="enh">front-end developer</span> who turns ideas
						into sleek, responsive websites that don't just work —{" "}
						<span className="enh">they impress.</span>
					</h3>
					<p>
						Blending sharp design with modern tech, he creates web experiences
						that stand out. Have a project in mind? Let’s make it happen—contact
						me!
					</p>
					
				</div>
				<div>
					<img src={hero_img} alt="hero-picture" />
				</div>
			</div>
    </div>
  )
}

export default Hero
