const Bio = () => {
  return (
    <section className="about">
      <div className="intro">
        <div className="intro-inner">
          <div className="text">
            <h1>Hi, I'm Sarfaraz.</h1>
          </div>
        </div>
      </div>
      <p>
        I’m a Polyglot Codeslinger (Software Engineer) currently living in
        Dhaka,Bangladesh. 🏔 I spend my days working at
        <a href="http://triplesgroupbd.com/" className="text-red">
          TripleSGroup
        </a>
        . My nights are spent building the
        <a href="https://github.com/AvatarPHP" className="text-magenta">
          AvatarPHP
        </a>{" "}
        and working on my various open source projects.
      </p>
      <p>Here’s a selection of some of my recent projects:</p>
    </section>
  );
};

export default Bio;
