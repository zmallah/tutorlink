import React from 'react';

import Navigation from '../components/Navigation';

const Home = (props) => {
  const {user} = props;
  
  return (
      <div className="background">
        <div className="content">
           <Navigation user={user}/>
        </div>
      </div>

  )

}

export default Home;
