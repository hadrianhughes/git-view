import React from 'react';
import { Input, Button, Form } from './styles';

interface PropTypes {
  value: string;
  onChange: (SyntheticEvent) => void;
  onSubmit: (SyntheticEvent) => void;
  placeholder?: string;
}

const Search = ({
  value,
  onChange,
  onSubmit,
  placeholder
}: PropTypes) => (
  <Form>
    <Input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange} />
    <Button type="submit" onClick={onSubmit}>Submit</Button>
  </Form>
);

export default Search;
