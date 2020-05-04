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
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
          <div className="card-social-links">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>
              <a href="#"><i class="fab fa-instagram-square"></i></a>
              <a href="#"><i class="fab fa-github-square"></i></a>
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;
