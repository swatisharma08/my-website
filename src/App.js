import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="cardContainer">
        <div className="card">
          <div className="card-content">
          <div className="card-image">
              <figure className="image is-54x54">
                <img src="/user-image.jpeg" alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-name">
              <div>
                <p className="title is-3">Swati Sharma</p>
                <p className="subtitle is-4">Sr. Software Developer</p>
              </div>
            </div>

            <div className="content">
              I am a passionate developer with problem solving mindset, who knows how to lead.
              Mostly work with Javascript frameworks, currently working in ReactJS and NodeJS
              <br />
            </div>

            <div className="card-social-links">
                <a href="https://www.linkedin.com/in/swati-sharma-2703419a" className="linked-in"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/swatisharma08" className="git"><i className="fab fa-github-square"></i></a>
                <a href="mailto:swatis4494@gmail.com" className="gmail"><i class="fas fa-envelope-square"></i></a>
                
            </div>
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;
