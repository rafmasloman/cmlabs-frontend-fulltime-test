import { useState } from 'react';

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return { searchValue, handleSearchChange };
};
