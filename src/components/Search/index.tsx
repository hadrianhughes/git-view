import React from 'react';

interface PropTypes {
  value: string;
  onChange: (SyntheticEvent) => void;
  onSubmit: (any) => void;
  placeholder?: string;
}

const Search = ({
  value,
  onChange,
  onSubmit,
  placeholder
}: PropTypes) => (
  <div>
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange} />
    <button onClick={onSubmit}>Submit</button>
  </div>
);

export default Search;
