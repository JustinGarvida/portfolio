import React from 'react';

const About = () => {
  return (
    <section
      id="about-me"
      className="scroll-mt-20 flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 lg:px-24 py-12 max-w-4xl mx-auto"
    >
      <div className="w-full">
        <h2 className="text-5xl font-bold mb-10 text-center">About Me</h2>

        <div className="space-y-6 text-lg leading-relaxed text-left text-secondary-color">
          <p>
            Hi everyone! My name is Justin Garvida and I'm currently a student at Drexel University
            pursuing a Bachelors of Science in Software Engineering and a minor in Data Science!
          </p>

          <p>
            I've had several experiences in the past working as a Software Engineer at Leidos and as a
            Data Operations Associate at DemandScience. In these experiences, I was able to refine my
            skills in areas such as software development and design, automation, testing, and data ETL processes.
          </p>

          <p>
            I'm looking forward to my next internship at Susquehanna International Group (SIG), where
            I'll be a Software Developer for the Electronic Options Trading (EOT) Team!
          </p>

          <p>
            In my free time, I like to play/watch basketball (big Lakers fan), workout, travel, explore
            nature, listen to music, play video games, and hang out with friends!
          </p>

          <p>
            Thanks for checking out my website!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
