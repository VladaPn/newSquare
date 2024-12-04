import React, { useEffect, useRef } from 'react';
import './Projects.css';
import rec from '../../assets/vr.png';
import crypto from '../../assets/crypto.png';
import edu from '../../assets/edu1.png';

const Projects = () => {
  const cardsRef = useRef([]); // Referenca za sve kartice

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate'); // Dodaj klasu sa zakašnjenjem
            }, index * 200); // Povećava se za 200ms za svaku karticu
          }
        });
      },
      { threshold: 0.2 } // Aktivira se kada je 20% kartice vidljivo
    );

    // Posmatraj svaku karticu
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="projects">
      <div className="container">
        <div className="separator">
          <h4>projects</h4>
          <div className="line"></div>
        </div>
        <div className="inner-container">
          <div
            className="card"
            ref={(el) => (cardsRef.current[0] = el)} // Prva kartica
          >
            <img src={edu} alt="project picture" />
            <div className="inner-text">
              <p className="tech">HTML CSS React</p>
              <h5>Edusity</h5>
              <p>
                Complete responsive website for private Edusity college made
                using React.
              </p>
              <div className="links-div">
                <a
                  href="https://educity-vlada.vercel.app/"
                  target="_blank"
                  className="live-a"
                >
                  live
                </a>
                <a
                  href="https://educity-vlada.vercel.app/"
                  target="_blank"
                  className="more"
                >
                  more...
                </a>
              </div>
            </div>
          </div>
          <div
            className="card"
            ref={(el) => (cardsRef.current[1] = el)} // Druga kartica
          >
            <img src={crypto} alt="project picture" />
            <div className="inner-text">
              <p className="tech">HTML CSS React API</p>
              <h5>Cryptoplace</h5>
              <p>Crypto value converter built with React JS and Coin Gecko API.</p>
              <div className="links-div">
                <a
                  href="https://cryptoplace-two.vercel.app/"
                  target="_blank"
                  className="live-a"
                >
                  live
                </a>
                <a
                  href="https://educity-vlada.vercel.app/"
                  target="_blank"
                  className="more"
                >
                  more...
                </a>
              </div>
            </div>
          </div>
          <div
            className="card"
            ref={(el) => (cardsRef.current[2] = el)} // Treća kartica
          >
            <img src={rec} alt="project picture" />
            <div className="inner-text">
              <p className="tech">HTML Tailwind React</p>
              <h5>VirtualR</h5>
              <p>
                Landing page for virtual reality tools company, made for
                developers. Made with React + Tailwind CSS.
              </p>
              <div className="links-div">
                <a
                  href="https://virtual-1purtivna-vladapns-projects.vercel.app/"
                  target="_blank"
                  className="live-a"
                >
                  live
                </a>
                <a
                  href="https://educity-vlada.vercel.app/"
                  target="_blank"
                  className="more"
                >
                  more...
                </a>
              </div>
            </div>
          </div>
        </div>
        <a href="" className="view-more">
          View more
        </a>
      </div>
    </div>
  );
};

export default Projects;

