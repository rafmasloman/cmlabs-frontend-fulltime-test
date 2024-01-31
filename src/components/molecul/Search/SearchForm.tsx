import Input from '@/components/atomic/Input/Input';
import React, { useState } from 'react';

interface ISearchFormTypesProps {
  placeholder: string;
}

const SearchForm = ({ placeholder }: ISearchFormTypesProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <Input
        value={searchValue}
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchForm;
