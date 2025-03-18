// home pages for our site
import MovieCard from "./components/MovieCard "

function Home(){
    const movies =[
        { id: 1, title:" john Wick " , release_date:"2020"},
        { id: 2, title:" Hritik Roshn " , release_date:"1990"},
        { id: 3, title:" Bhubali 2 : Conclusion" , release_date:"2018"},
        { id: 4, title:" Tumbbad " , release_date:"2019"},           {  id: 5, title:" Patal Lok " , release_date:"2022"}
    ];

    function handleSearch () {};  

     return
        <div className="home">
            <form onSubmit={handleSearch} className= "search-form">
                <input type="text"
                placeholder="Search for movie..."
                className="search-input"
                />
                <button type="submit" className="search-button"></button>
                </form>
            
            <div className="movie-grid">
                {movies.map( (movie) => <MovieCard movie ={movie} key={movie.id} />)}
                
                </div>
                </div>

        
     
}