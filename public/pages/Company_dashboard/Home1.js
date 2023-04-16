import React from 'react';

import './Home.css'
import About from './About';
// import Login from './Login';
import Vote from './Vote.jpg'
import blockchain1 from './blockchain1.jpg'
// import Vote from './Components/Images/Vote.jpg';
function Home1() {
  return (
    <div>
      <header>
        <h1>Blockchain Voting Platform</h1>
        <img src={Vote} alt="platform logo" />
      </header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/admin">Admin</a></li>
          <li><a href="/results">Results</a></li>
        </ul>
      </nav>
      <section>
        {/* <h2>Log In or Create an Account</h2> */}
        {/* Add login form */}
        {/* <h1>Home page data</h1> */}
        {/* <About></About> */}
        <div className='main'>
        {/* <h1>Welcome to the Blockchain Voting System</h1> */}
        {/* <p>Here, you can cast your vote for the candidates running in the upcoming election.</p> */}
        
        <img src={blockchain1} alt="Main-page-Image" className='main-img'/>  
          </div>

        {/* <Login></Login> */}

      </section>
      <section>
        {/* <h2>Active Voting Polls</h2> */}
        {/* Add voting options */}
      </section>
      <section>
        {/* <h2>Voting History and Results</h2> */}
        {/* Add previous voting history and results */}
      </section>
      <footer>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          
        </ul>
      </footer>
    </div>
  );
}

export default Home1;
