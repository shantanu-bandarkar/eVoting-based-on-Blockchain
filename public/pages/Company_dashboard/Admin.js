import * as React from 'react';
import Vote from './Vote.jpg'
import './Admin.css'

const Admin = () => {
  return (<>
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
      <div className='sidebar'>
        <ul>
          <li><a href="/Addcandidate">Add candidates</a></li>
          <li><a href="/AddElection">Add new Election</a></li>
          <li><a href="/ViewResults">View Election Results</a></li>
          <li><a href="/Logout">Log Out</a></li>
          
        </ul>
      </div >
      <div className="admin_content">
        
            <h3> Admin Page In this example, the navbar is at the top of the page</h3>
      </div>
        
      
    </div>
    <footer>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          
        </ul>
      </footer>
    </>
    
  );
};
export default Admin;


