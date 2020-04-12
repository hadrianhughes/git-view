import React from 'react';
import { Input, Button, Wrapper } from './styles';

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
  <Wrapper>
    <Input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange} />
    <Button onClick={onSubmit}>Submit</Button>
  </Wrapper>
);

export default Search;
