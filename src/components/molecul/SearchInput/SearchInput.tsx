import { useSearch } from '@/hooks/useSearch';
import React, { FormEvent } from 'react';
import { ISearchInputProps } from './interfaces/SearchInpu.interfaces';
import { IconSearch } from '@tabler/icons-react';
import Button from '@/components/atomic/Button/Button';

const SearchInput = ({ onSearch }: ISearchInputProps) => {
  const { searchValue, handleSearchChange, handleSubmit } = useSearch({
    onSearch,
  });

  return (
    <form onSubmit={handleSubmit} className="w-full mt-5 md:mt-0 md:w-1/2">
      <div className="w-full flex space-x-3">
        <input
          placeholder="Cari Ingredients"
          value={searchValue}
          onChange={handleSearchChange}
          className="bg-white flex-1 border-solide border-[1px] px-3.5 py-2.5 rounded-full focus:outline-none focus:border-primary-color"
        />

        <Button
          type="submit"
          className="bg-primary-color px-3.5 md:px-3  rounded-full"
        >
          <IconSearch className="text-white w-5 h-5 md:w-6 md:h-6 " />
        </Button>
      </div>
    </form>
  );
};

export default SearchInput;
