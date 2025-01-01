import React from 'react';

const Welcome = () => {
  return (
    <section id="about-me" className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8"> {/* Grid layout for responsiveness */}
      <img
        src={require('../images/justin_linkedin.jpeg')}
        alt="Justin Garvida"
        className="rounded-lg w-3/4 h-auto" // Tailwind classes for rounded corners and full width
      />
      <div className="homeText flex flex-col justify-center text-left"> {/* Flexbox for text alignment */}
        <h2 className="text-3xl font-bold mb-4">About Me</h2> {/* Tailwind classes for heading */}
        <p className="text-lg"> {/* Tailwind classes for paragraph */}
          Hi everyone! My name is Justin Garvida and I'm currently a student at Drexel University pursuing a Bachelors of Science in Software Engineering and a minor in Data Science! <br/><br/>
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
