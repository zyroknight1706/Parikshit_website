import React from 'react';
import './Sponsors.css'; // Import custom CSS file

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <div className="content-wrapper">
        <header className="header">
          <h1>Support Our Mission</h1>
          <p>
            The Parikshit Student Project, based at MIT Manipal, is a pioneering student initiative aimed at developing satellite technology in collaboration with ISRO. Join us in our mission to explore new frontiers in space.
          </p>
        </header>
        <section className="sponsors-section">
          <p className="no-sponsors-text">
            We are currently seeking visionary sponsors who share our passion for space exploration. By supporting us, you'll play a crucial role in empowering the next generation of space scientists and engineers.
          </p>
          <p className="no-sponsors-text">
            Your sponsorship will help us achieve our goals and provide your organization with visibility and recognition in the field of aerospace and beyond.
          </p>
        </section>
        <section className="form-section">
          <h2 className="form-title">Become a Sponsor</h2>
          <div className="form-container">
            <iframe
              src="https://tally.so/embed/mZYO7a?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Sponsor Form"
              className="form-iframe"
            />
          </div>
        </section>
        <footer className="footer">
          <p>
            If you're interested in sponsoring our project, please fill out the form above. We look forward to your support!
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Sponsors;
