import React from 'react';

const SearchBar = () => {
  return (
    <form>
      <label
        for="default-search"
        className="mb-2 text-sm font-medium text-gray-500 sr-only "
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block md:w-[400px] p-2 pl-10 text-sm text-gray-900 shadow rounded-lg h-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500   dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search here..."
          required
        />
      </div>
    </form>
  );
};

export default SearchBar;
