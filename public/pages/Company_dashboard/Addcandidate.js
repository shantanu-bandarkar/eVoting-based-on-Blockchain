// import * as React from 'react';
// // import {Link} from "react-router-dom";
import Vote from './Vote.jpg'
import './Admin.css'



import React, { useState } from 'react';

function Addcandidate() {
  const [candidate, setCandidate] = useState({
    name: '',
    party: '',
    // add any other relevant candidate information here
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCandidate({ ...candidate, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: send candidate information to blockchain for verification and addition
    // Display success/failure message to user
    // If successful, update state to display new candidate in candidate list
  }

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

      <h2>Add a Candidate</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={candidate.name} onChange={handleInputChange} />
        </label>
        <label>
          Party:
          <input type="text" name="party" value={candidate.party} onChange={handleInputChange} />
        </label>
        {/* Add additional form fields here as needed */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Addcandidate;
