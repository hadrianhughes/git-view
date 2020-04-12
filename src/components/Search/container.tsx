import React from 'react';
import { connect } from 'react-redux';
import Search from './index';
import { AppState } from '../../reducer';
import { setSearchValue, performSearch } from '../../actions';

interface PropTypes {
  searchValue: string;
  setSearchValue: (string) => void;
  performSearch: () => void;
}

export const SearchContainer = ({ searchValue, setSearchValue, performSearch }: PropTypes) => {
  const handleChange = (e: SyntheticEvent): void => {
    const { value } = (e.target as HTMLInputElement);
    setSearchValue(value);
  };

  return (
    <Search
      value={searchValue}
      onChange={handleChange}
      onSubmit={performSearch}
      placeholder="Search..." />
  );
};

const mapStateToProps = (state: AppState) => ({
  searchValue: state.searchValue
});

const mapDispatchToProps = { setSearchValue, performSearch };

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
