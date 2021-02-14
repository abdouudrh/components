import './App.css';
import React from 'react';
import FullName from './components/Profile/FullName'
import Adress from './components/Profile/EmailAdress'
import ProfilePhoto from './components/Profile/ProfilePhoto'


const  App = () => {
  return (
    <div className="App">
      <div>
        <ProfilePhoto/> 
      </div>
      <div className="info" >
        <FullName/>
        <Adress/>
      </div>
      
    </div>
  );
}

export default App;
