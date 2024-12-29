import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after the component is mounted
    const timer = setTimeout(() => setFadeIn(true), 500); // Delay of 500ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className={`hero ${fadeIn ? 'fade-in' : ''}`}>
      <h1>Hi, I'm Jayakumaar</h1>
      <p>Developer | Tech Enthusiast</p>
      {/* <button>View My Work</button> */}
    </section>
  );
};

export default Hero;
