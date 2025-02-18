import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from '../Components/Pagination';

const Home = ({ setID, data, setData, Page, setPage, Tdata, setTData, searchResults }) => {
  const navigate = useNavigate();
  const [movieid, setMovieId] = useState("new");

  //console.log(searchTerm)
  useEffect(() => {
    fetchData();
    fetchTotal();
  }, [movieid, Page]);

  const handleView = (id) => {
    setID(id)
    navigate(`/MovieDetails?id=${id}`)
  }
  const fetchData = async () => {
    await axios
      .get(`https://www.omdbapi.com/?s=${movieid}&page=${Page}&apikey=87ab1610`)
      .then((res) => setData(res.data.Search))
      .catch((error) => console.log(error));
    //console.log(data)
  };

  const fetchTotal = async () => {
    await axios
      .get(`https://www.omdbapi.com/?s=${movieid}&page=${Page}&apikey=87ab1610`)
      .then((res) => setTData(res.data.totalResults))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-1 flex-row flex-wrap gap-6 mx-12 my-20 justify-center">
      {data.slice(0, 20).map((ele, index) => {
        if (ele.Type === searchResults.toLowerCase() || ele.Type == '') {
          return (
            <div key={index} className="basis-1/1 w-full sm:w-64 border border-gray-200 rounded-lg shadow hover:shadow-lg bg-white">
              <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-t-lg m-auto"
                  src={ele.Poster}
                  alt="product Image"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {ele.Title}
                  </h5>
                  <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
                    <span className="font-bold">Year: </span>{ele.Year}
                  </p>
                  <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
                    <span className="font-bold"></span>{ele.Type}
                  </p>
                </div>
                <div className="text-center">
                  <div className="m-4">
                    <button
                      type="button"
                      className="text-white m-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      onClick={() => {
                        handleView(ele.imdbID);
                      }}
                    >
                      View More
                    </button>

                  </div>
                </div>
                {/* </Navigate> */}
              </div>
            </div>
          );
        }
      })}
      {Tdata > 10 ?
        <Pagination Page={Page} setPage={setPage} Tdata={Tdata} /> : ""}
    </div>
  );
};

export default Home;