import { getMovies } from "@/helpers/movieFunctions";
import React from "react";
import MovieSection from "./components/MovieSection";
import HeroSection from "./components/HeroSection";

export const metadata = {
  title: "Movies",
};
const Movies = async () => {
  const movies = await getMovies("now_playing");
  console.log(movies);

  return (
    <>
      <HeroSection
        title={movies[0]?.title}
        overview={movies[0]?.overview}
        id={movies[0].id}
      />
      <div className="px-4 md:px-12 mt-4">
        <MovieSection title="NOW PLAYİNG" type="now_playing" />
        <MovieSection title="POPULAR" type="popular" />
        <MovieSection title="TOP RATED" type="top_rated" />
        <MovieSection title="UPCOMİNG" type="upcoming" />
      </div>
    </>
  );
};

export default Movies;
