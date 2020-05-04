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
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-name">
              <div>
                <p className="title is-3">Swati Sharma</p>
                <p className="subtitle is-4">Sr. Software Developer</p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br />
            </div>

            <div className="card-social-links">
                <a href="#" className="facebook"><i className="fab fa-facebook"></i></a>
                <a href="#" className="linked-in"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="instagram"><i className="fab fa-instagram-square"></i></a>
                <a href="#" className="git"><i className="fab fa-github-square"></i></a>
            </div>
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;
