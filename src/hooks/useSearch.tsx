import { FormEvent, useEffect, useState } from 'react';

interface IUseDebouncedSearchInputProps {
  initialValue?: string;
  onSearch: (searchTerm: string) => void;
}

export const useSearch = ({
  initialValue = '',
  onSearch,
}: IUseDebouncedSearchInputProps) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSearch(searchValue);
  };

  return { searchValue, handleSearchChange, handleSubmit };
};
