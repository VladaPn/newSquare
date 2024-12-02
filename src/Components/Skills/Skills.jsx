import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import fire from "../../assets/fire.svg";

const Skills = () => {
	const [isVisible, setIsVisible] = useState(false); // Praćenje vidljivosti sekcije
	const skillsRef = useRef(null); // Referenca na sekciju

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true); // Aktiviraj animaciju kad je sekcija vidljiva
				}
			},
			{ threshold: 0.5 } // Aktivira se kada je 50% sekcije vidljivo
		);

		if (skillsRef.current) {
			observer.observe(skillsRef.current);
		}

		return () => {
			if (skillsRef.current) {
				observer.unobserve(skillsRef.current);
			}
		};
	}, []);

	return (
		<div className="skills" ref={skillsRef}>
			<div className="container">
				<div className="separator">
					<h4>skills</h4>
					<div className="line"></div>
				</div>
				<div className="inner-container">
					<div className="fire">
						<img
							src={fire}
							alt="Fire animation"
							className={isVisible ? "animate" : ""} // Dodaj klasu za animaciju
						/>
					</div>
					<div className="skills-container">
						<div className="skills-item languages">
							<h5>Languages</h5>
							<p>TypeScript Lua</p>
							<p>Python JavaScript</p>
						</div>
						<div className="skills-item databases">
							<h5>Databases</h5>
							<p>SQLite PostgreSQL</p>
							<p>Mongo</p>
						</div>
						<div className="skills-item tools">
							<h5>Tools</h5>
							<p>VSCode Neovim Linux</p>
							<p>Figma XFCE Arch</p>
							<p>Git Font Awesome</p>
						</div>
						<div className="skills-item other">
							<h5>Other</h5>
							<p>HTML CSS EJS SCSS</p>
							<p>REST Jinja</p>
						</div>
						<div className="skills-item frameworks">
							<h5>Frameworks</h5>
							<p>React Vue</p>
							<p>Disnake Discord.js</p>
							<p>Flask Express.js</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
