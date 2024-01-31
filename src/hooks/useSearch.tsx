import { FormEvent, useEffect, useState } from 'react';

interface IUseDebouncedSearchInputProps {
  initialValue?: string;
  delay?: number;
  onSearch: (searchTerm: string) => void;
}

export const useSearch = ({
  initialValue = '',
  delay = 300,
  onSearch,
}: IUseDebouncedSearchInputProps) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       // Call the onSearch callback with the current search value after debounce delay
  //       onSearch(searchValue);
  //     }, delay);

  //     return () => clearTimeout(timer); // Clear the timeout on component unmount or when searchValue changes
  //   }, [searchValue, onSearch, delay]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSearch(searchValue);
  };

  return { searchValue, handleSearchChange, handleSubmit };
};
