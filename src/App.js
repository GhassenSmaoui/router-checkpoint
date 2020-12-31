import {React, useState} from "react"
import './App.css';
import {Card }from "react-bootstrap";
import AddMovie from './Components/AddMovie';
import MovieList from "./Components/MovieList";
import {moviesList} from './assets/Data';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router , Route} from "react-router-dom";
import Trailer from "./Components/Trailer";

function App() {
  const [movieList, setMovieList] = useState(moviesList)
  const addMovie=(title,posterUrl,description,rate)=>{
    setMovieList([...movieList,{title:title,posterUrl:posterUrl,description:description,rate:rate}])
  }
  return (
    <div className="container-fluid">
      <Router>
      
      <Route exact path ='/' render ={(props)=><MovieList movieList = {movieList} {...props} />}/>
      <Route exact path ='/' render ={(props)=><AddMovie addMovie = {addMovie}{...props} />}/>
      <Route path ='/watch/:title' render ={(props)=><Trailer movieList = {movieList} {...props} />}/>
      
      </Router>
    </div>
  );
}

export default App;
