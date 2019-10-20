import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends React.Component {
  render() {
    let input;
    const handleClick = () => {
      this.props.onSearch(input.value);
    };
    return (
      <InputGroup className="searchbar">
        <InputGroup.Prepend>
          <InputGroup.Text className="search-pre"><FontAwesomeIcon icon={faSearch} className="search-icon" /></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          className="search"
          ref={n => input = n}
          aria-label="Search"
          onChange={handleClick.bind(this)}
        />
      </InputGroup>
    );
  }
};

export default SearchBar