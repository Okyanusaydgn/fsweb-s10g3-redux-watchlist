import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch, useSelector } from "react-redux";
import { favoriActions } from "./store/reducers/favoriReducer";

function App() {
  const [sira, setSira] = useState(0);
  const favMovies = useSelector((store) => store.favorites);
  const movies = useSelector(store => store.movies);
  const dispath = useDispatch();
  const listede = useSelector( 
    store => store.favorites.find(f => f.id === movies[sira].id))


  function sonrakiFilm() {
    setSira(sira + 1 <=  movies.length - 1 ? sira +1: 0);
  }

  function oncekiFilm() {
    setSira(sira - 1>= 0 ? sira-1 : movies.length - 1);
  }

  const listeToggle = () => {
    if(listede){
      dispath({
        type: favoriActions.removeFavorite,
        payload: movies[sira].id,
      })
    }
    else{
      
      dispath({
        type: favoriActions.addFavorite,
        payload: movies[sira],
      })
    }
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink to="/" exact className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">


          <button
              onClick={() =>setSira(0)}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              İlk Film
            </button>

          <button
              onClick={oncekiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Önceki
            </button>
            <button
              onClick={sonrakiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>
            <button className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            onClick={listeToggle}
            >
              Listeme {listede ? "Listeden Çıkar" : "Listeye Ekle"}
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
