import React from "react";
import "./About.css";
import about_img from "../../assets/about.svg";

const About = () => {
	return (
		<div className="about-section">
			<div className="container">
				<div className="separator">
					<h4>about</h4>
					<div className="line"></div>
				</div>
				<div className="inner-container">
					<div className="img-div"><img src={about_img} alt="about me image" />
                    </div>
					<p className="about-text">
						<div className="strong-heading">Hello, I’m Vladimir! </div> I’m a passionate front-end developer
						specializing in creating responsive and modern web experiences.
						Based in Serbia, I bring ideas to life by crafting
						user-friendly websites that merge creativity with functionality.
                        </p><p className="about-text"> For
						over a year, I’ve been dedicated to helping businesses and
						individuals establish a strong online presence. From designing sleek
						interfaces to implementing the latest technologies and frameworks, I
						strive to deliver exceptional results tailored to each client’s
						needs. Let’s build something amazing together!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
