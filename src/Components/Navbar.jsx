import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ searchTerm,setSearchTerm,searchResults,setSearchResults,setPage }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?id=${searchTerm}`)
    setPage(1)
  }
  return (
    <div>
      <nav className="bg-rose-900 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center m-auto sm:m-0 space-x-3 rtl:space-x-reverse">
            <img src="https://tse2.mm.bing.net/th?id=OIG4.DCNk6bXJXUUm1Z3DOL46&pid=ImgGn" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HKXMS</span>
          </a>

          {/* <form className="max-w-md mx-auto w-full" onSubmit={()=>handleSubmit()}>    */}
          <form className="max-w-md mx-auto my-5 sm:my-0 w-full">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search"
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movie Names..." required />
              <button type="submit" onClick={handleSubmit} className="text-white absolute end-2.5 bottom-2.5 bg-slate-800 hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-slate-100 dark:hover:bg-slate-50 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>
          {/* Dropdown menu */}
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col justify-center p-2 md:p-0 my-1 rounded-lg bg-rose-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-rose-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <select
                value={searchResults} // ...force the select's value to match the state variable...
                onChange={e => setSearchResults(e.target.value)} // ... and update the state variable on any change!
                className='w-60 md:w-full lg:w-60 m-auto sm:m-1 text-slate-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'
              >
                <option className='block px-4 py-2 dark:hover:text-white' value="Movie">Movie</option>
                <option className='block px-4 py-2 dark:hover:text-white' value="Series">Series</option>
              </select>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;