function MovieCard({ movie }) {
  function onFavoriteClick() {
      alert("clicked");
  }

  return (
     <>
     <MovieCard movie={{title:"War 2" , release_date:  "2024"} } />
     <MovieCard movie={{title:"Bhubali 2" , release_date:  "2018"} } />

     </>
  );
}
export default MovieCard;