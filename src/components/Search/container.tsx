import React from 'react';
import { connect } from 'react-redux';
import Search from './index';
import { AppState } from '../../reducer';
import { setSearchValue } from '../../actions';

interface PropTypes {
  searchValue: string;
  setSearchValue: (string) => void;
}

export const SearchContainer = ({ searchValue, setSearchValue }: PropTypes) => {
  const handleChange = (e: SyntheticEvent): void => {
    const { value } = (e.target as HTMLInputElement);
    setSearchValue(value);
  };

  const handleSubmit = (): void => {
    console.info('Perform search!');
  };

  return (
    <Search
      value={searchValue}
      onChange={handleChange}
      onSubmit={handleSubmit}
      placeholder="Search..." />
  );
};

const mapStateToProps = (state: AppState) => ({
  searchValue: state.searchValue
});

const mapDispatchToProps = { setSearchValue };

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
