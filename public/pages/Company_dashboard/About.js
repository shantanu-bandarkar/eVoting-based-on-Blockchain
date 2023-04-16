import React from 'react';
import './Home.css'
import Vote from './Vote.jpg'
import blockchain1 from './blockchain1.jpg'

function About() {
  return (
    <>
  
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

    <div>
      <h1>About Us</h1>
      <p>Our mission is to increase transparency and accountability in elections using blockchain technology.</p>
      <h2>How It Works</h2>
      <p>Our blockchain voting application uses smart contracts to securely authenticate voters and record their votes on the blockchain. This ensures that votes are tamper-proof and transparent, while maintaining voter anonymity.</p>
      <h2>Benefits</h2>
      <ul>
        <li>Increased security</li>
        <li>Immutability</li>
        <li>Transparency</li>
      </ul>
      <h2>Team</h2>
      <ul>
        <li>Rushikesh </li>
        <li>Prathamesh </li>
        <li>Ketan </li>
        <li>Shantanu</li>
      </ul>
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback</p>
    </div>
    <footer>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          
        </ul>
      </footer>
    </>
  );
}

export default About;
