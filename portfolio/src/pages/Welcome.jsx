import React from 'react';
import linkedinImage from '../images/justin_linkedin.jpeg';

const Welcome = () => {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <img
        src={linkedinImage}
        alt="Justin Garvida"
        className="rounded-lg w-3/4 h-auto"
      />
      <div className="homeText flex flex-col justify-center text-left">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          My name is Justin Garvida and I'm currently a student at Drexel University pursuing a Bachelor of Science in Software Engineering and a minor in Data Science! <br/><br/>
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
