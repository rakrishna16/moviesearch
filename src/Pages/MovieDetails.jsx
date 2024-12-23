import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { useNavigate, useSearchParams } from 'react-router-dom';


const MovieDetails = ({ id }) => {
    const [urlValue] = useSearchParams()
    console.log(urlValue.get("type"))
    const [movieData, setmovieData] = useState([]);
    useEffect
    useEffect(() => {
        fetchData();
    }, []);
    const gg = urlValue.get("id");
    console.log(gg)

    const fetchData = async () => {
        id ?
            await axios
                .get(`http://www.omdbapi.com/?i=${id}&apikey=87ab1610`)
                .then((res) => setmovieData(res.data))
                .catch((error) => console.log(error)) :
            await axios
                .get(`http://www.omdbapi.com/?i=${gg}&apikey=87ab1610`)
                .then((res) => setmovieData(res.data))
                .catch((error) => console.log(error));

    };

    return (
        <div>

            <div key={id}>
                <div className="max-w-full content-center bg-white border border-spacing-0 rounded-lg mx-auto shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="mb-3 text-gray-500 dark:text-gray-400">
                        <h1 className="my-4 text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-zinc-900 from-gray-900  md:text-5xl lg:text-6xl">{movieData.Title}</h1>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">

                        <div className="mb-3 mx-5 text-gray-500 dark:text-gray-400">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <img
                                    className="rounded-t-lg mx-auto"
                                    src={movieData.Poster}
                                    alt="product Image"
                                />
                            </h5>
                        </div>

                        <div className="mx-5 my-auto text-xl tracking-tight text-gray-900 dark:text-gray-400">
                            <span className="text-zinc-950 font-bold">Type: </span>{movieData.Type}
                            <div></div>
                            <span className="text-zinc-950 font-bold">Released:</span> {movieData.Released}
                            <div></div>
                            <span className="text-zinc-950 font-bold">Genre: </span>{movieData.Genre}
                            <div></div>
                            <span className="text-zinc-950 font-bold">Director: </span> {movieData.Director}
                            <div></div>
                            <span className="text-zinc-950 font-bold">Writer: </span>{movieData.Writer}
                            <div></div>
                            <span className="text-zinc-950 font-bold">Actors: </span>{movieData.Actors}
                            <div></div>
                            <span className="text-zinc-950 font-bold">Country: </span>{movieData.Country}
                            <div></div>
                            <span className="text-zinc-950 font-bold">Language: </span>{movieData.Language}
                            <div></div>
                            <span className="text-zinc-950 font-bold">Runtime: </span>{movieData.Runtime}
                        </div>

                        <div className="mx-5 my-auto text-xl tracking-tight text-gray-900 dark:text-gray-400">
                            <span className="text-zinc-950 font-bold">Awards: </span>{movieData.Awards}
                            <div></div>
                            <span className="text-zinc-950 font-bold">BoxOffice: </span>{movieData.BoxOffice}
                            <div></div>
                            {movieData.Ratings ? movieData.Ratings.map((ingr, index) => {
                                `${ingr.Source} : ${ingr.Value}`
                            }) : ""}

                            <span className="text-zinc-950 font-bold">imdbVotes: </span> {movieData.imdbVotes}
                            <div></div>
                            <span className="text-zinc-950 font-bold">Metascore: </span>{movieData.Metascore}/100
                            <div></div>
                            <span className="text-zinc-950 font-bold">imdbRating: <FaStar />{movieData.imdbRating}/10</span>
                            <div></div>
                            <span className="text-zinc-950 font-bold">Production: </span>{movieData.Production}
                        </div>
                    </div>
                    <div className="mb-3 text-center text-gray-500 dark:text-gray-400">
                        <span className="text-zinc-950 font-bold">Released Year: </span>{movieData.Year}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MovieDetails;