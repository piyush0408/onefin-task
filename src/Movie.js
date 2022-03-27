import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./Movie.css";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineReload } from "react-icons/ai";
import Loader from "./Loader";
import Cookies from "js-cookie";

let token;
// "token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1MzczMSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImV4cCI6MTY1MDg4ODkyNCwiZW1haWwiOiIiLCJvcmlnX2lhdCI6MTY0ODI5NjkyNH0.s8O2lgJmj0VaCbU3LeVAHqk8Drvr16OuVXova4e4H10";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async (p) => {
    try {
      let reqURL;
      // console.log("p in fetch", token);
      if (p > 1) reqURL = `https://demo.credy.in/api/v1/maya/movies/?page=${p}`;
      else reqURL = `https://demo.credy.in/api/v1/maya/movies/`;

      let x = await fetch(reqURL, {
        method: "GET",
        headers: { Authorization: token },
      })
        .then((response) => response.json())
        .then((data) => data);
      setLoading(false);

      // console.log("x", x);
      setMovies(x.results);
      // console.log(movies);
      // return x;
    } catch (error) {
      console.log(error);
      setLoading(false);
      // return error;
    }
  };
  const pageCall = async (event) => {
    // data(page);
    //
    // event.preventDefault();
    // console.log();

    console.log(event.target.value);
    let x = Number(event.target.value);
    console.log(x);
    await setPage(x);
    console.log(page);
    fetchMovies(x);
  };

  useEffect(() => {
    token = `token ${Cookies.get("token")}`;

    fetchMovies(1);
  }, []);

  return (
    <div className="movieContainer">
      <div className="searchHeader">
        <div className="mainHeader">MovieBIZ</div>

        <div className="searchBox">
          <input type="text" placeholder="Search Movie here..." />
          <BiSearchAlt className="searchIcon" />
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="movieCardContainer">
          {movies ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.uuid}
                title={movie.title}
                description={movie.description}
                genre={movie.genres}
              />
            ))
          ) : (
            <button className="refreshBtn" value={page} onClick={pageCall}>
              <AiOutlineReload className="reloadIcon" />
              refresh
            </button>
          )}
        </div>
      )}
      <div className="pagination">
        {page - 1 > 0 ? (
          <button onClick={pageCall} value={page - 1}>
            {page - 1}
          </button>
        ) : (
          " "
        )}
        <p>{page}</p>
        <button onClick={pageCall} value={page + 1}>
          {page + 1}
        </button>
      </div>
    </div>
  );
};

export default Movie;
