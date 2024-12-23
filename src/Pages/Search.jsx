import axios from 'axios';
import React, { useEffect, useState, data } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../Components/Pagination';

const Search = ({ Page, setPage,Tdata,setTData }) => {
    const [urlValue] = useSearchParams()
    const [data, setData] = useState([]);
    const ghi = urlValue.get("id");

    if (ghi === null) {
        console.log("NULL property")
    } else {
        console.log("ok to proceed")
    }
    console.log(ghi)

    useEffect(() => {
        fetchData();
        fetchTotal()
    }, [ghi, Page]);

    const fetchData = async () => {
        await axios
            .get(`https://www.omdbapi.com/?s=${ghi}&page=${Page}&apikey=87ab1610`)
            .then((res) => setData(res.data.Search))
            .catch((error) => console.log(error));
        //console.log(data)
    };

    const fetchTotal = async () => {
        await axios
            .get(`https://www.omdbapi.com/?s=${ghi}&page=${Page}&apikey=87ab1610`)
            .then((res) => setTData(res.data.totalResults))
            .catch((error) => console.log(error));
        console.log(Tdata)
    };
    return (
        <div className="flex flex-1 flex-wrap gap-6 mx-12 my-20 justify-center">
            {
                data ?
                    data.slice(0, 10).map((ele, index) => {
                        return (
                            <div key={index}>

                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    {/* <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {ele.productId}
              </h2> */}
                                    {/* <Navigate to={`/${ele.imdbID}`}> */}
                                    <img
                                        className="rounded-t-lg"
                                        src={ele.Poster}
                                        alt="product Image"
                                    />

                                    <div className="p-5">
                                        <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {ele.Title}
                                        </h5>
                                        {/* <h5 className="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">
                  {ele.Type}
                </h5> */}

                                        <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
                                            <span className="font-bold">Year: </span>{ele.Year}
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div>
                                            <button
                                                type="button"
                                                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
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

                    }) : "Page not found"

            }
            {Tdata > 10 ?
                <Pagination Page={Page} setPage={setPage} data={data} Tdata={Tdata} /> : ""}
        </div>
    );
};

export default Search;