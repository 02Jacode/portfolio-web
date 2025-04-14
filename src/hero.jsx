import './assets/hero.css';
// import { getCurrentTime } from './assets/clock.js';
import { useEffect, useState } from 'react';
import profileImage from '../public/me.png';

function Hero() {
  // const [time, setTime] = useState(getCurrentTime());
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ['Web Developer', 'Front-End Developer', 'Back-End Developer', 'Tech Enthusiast'];
  
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime(getCurrentTime());
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const type = () => {
      if (!isDeleting && displayText === currentRole) {
        // Wait before starting to delete
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }

      if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      const nextText = isDeleting
        ? currentRole.substring(0, displayText.length - 1)
        : currentRole.substring(0, displayText.length + 1);

      setDisplayText(nextText);
    };

    const typeTimer = setTimeout(type, typeSpeed);
    return () => clearTimeout(typeTimer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <>
      <div className="me">
        <div className="header-text">
          <h2>Hey there!</h2>
          <div className="text-content">
            <h1>My name is Jacob Cortes</h1>
            <h4>
              I'm a [ <span className="typing-text">{displayText}</span><span className="cursor">|</span>]
            </h4>
          </div>
          {/* <div className="clock" style={{
            color: 'white',
            textShadow: '0 0 0.2cm rgba(0, 0, 0, 0.5)',
            fontSize: '20px'
          }}>
            {time.dayOfWeek}, {time.fullDate} | {time.timeString}
          </div> */}
          <img src={profileImage} alt="Jacob Cortes" className="profile-image" />
        <div className="buttons">
          <button>About</button>
          <button>Resume</button>
        </div>
        </div>
      </div>
      <hr className="glow-hr" />
    </>
  );
}

export default Hero;