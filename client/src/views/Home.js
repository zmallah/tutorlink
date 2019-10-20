import React, {useState} from 'react';

import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import Groups from '../components/Groups';
import CreateGroup from '../components/CreateGroup';

const Home = (props) => {
  const { user } = props;
  const [showCreate, setShowCreate] = useState(false);
  return (
    <div className="content">
      <Navigation user={user} />
      <SearchBar setShowCreate={setShowCreate}/>
      {showCreate ? <CreateGroup showCreate={showCreate} setShowCreate={setShowCreate}/> : null }
      <Groups user={user}/>
    </div>

  )

}

export default Home;
