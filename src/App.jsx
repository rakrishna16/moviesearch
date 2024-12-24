import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import NotFound from './Pages/NotFound';
import MovieDetails from './Pages/MovieDetails';
import Search from './Pages/Search';

const App = () => {
  const [id, setID] = useState(0)
  const [Page, setPage] = useState(1)
  const [Tdata, setTData] = useState(0);
  const [searchResults, setSearchResults] = useState('movie');
  const [Dropmen, setDropmen] = useState(false)
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='bg-slate-400'>
      <BrowserRouter>
        <div>
          <Navbar id={id} setID={setID} searchTerm={searchTerm} setSearchTerm={setSearchTerm} data={data} Dropmen={Dropmen} setDropmen={setDropmen} setPage={setPage} searchResults={searchResults} setSearchResults={setSearchResults} />
        </div>
        <Routes>
          <Route path='/' element={<Home setID={setID} searchTerm={searchTerm} data={data}
            setData={setData} Tdata={Tdata} setTData={setTData} Page={Page} setPage={setPage}
            searchResults={searchResults} setSearchResults={setSearchResults} />} />
          <Route path='Search' element={<Search data={data} Page={Page} setPage={setPage} Tdata={Tdata} setTData={setTData} setID={setID} searchResults={searchResults} setSearchResults={setSearchResults} />} />
          <Route path='MovieDetails' element={<MovieDetails id={id} setSearchTerm={setSearchTerm} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;