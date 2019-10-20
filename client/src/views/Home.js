import React from 'react';

import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import Groups from '../components/Groups';

const Home = (props) => {
  const { user } = props;

  return (
    <div className="content">
      <Navigation user={user} />
      <SearchBar/>
      <Groups/>
    </div>

  )

}

export default Home;
