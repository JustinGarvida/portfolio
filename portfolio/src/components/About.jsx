import React from 'react';

const Welcome = () => {
  const imageStyle = {
    width: '70%',
  };

  return (
    <section id="about" className="homeSection">
      <img
        src={require('../images/justin_linkedin.jpeg')}
        alt="Justin Garvida"
        className='homeImage'
        style={imageStyle} // Apply the style here
      />
      <div className="homeText">
        <h2 className='homeTextH2'>About Me</h2>
        <p className='homeTextP'>
          My name is Justin Garvida and I'm currently a student at Drexel University pursing a Bachelors of Science in Software Engineering and a minor in Data Science! <br/><br/>
          I've had several experiences in the past working as a Software Engineer at Leidos and as a Data Operations Associate at DemandScience. In these experiences, I was able to
          refine my skills in areas such as software development and design, automation, testing, and data ETL processes.<br/><br/>
          I'm looking forward to my next internship at Susquehanna International Group (SIG), where I'll be a Software Developer for the EOT Database Engineering team!<br/><br/>
          In my free time, I like to play/watch basketball (big Lakers fan), workout, travel, explore nature, listen to music, play video games, and hang out with friends!<br/><br/>
          Thanks for checking out my website!

          
        </p>
      </div>
    </section>
  );
};

export default Welcome;
