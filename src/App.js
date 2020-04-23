import React, { useState } from 'react'
import axios from 'axios'

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
    credits: [],
    release : []
  });


  const search = (e) => {
    if (e.key === "Enter") {

      


      axios("https://api.themoviedb.org/3/search/movie?api_key=8400f8e7e485871738542e04b6eabdd4&language=fr-FR&query="+ state.s+"&page=1&include_adult=false").then(({ data }) => {
        let results = data;
        console.log(results);
        setState(prevState => {
          return { ...prevState, results: results.results }
        })
      });
    }
  }
  
  const recherche = (e) => {
    let maRecherche = e.target.value;

    setState(prevState => {
      return { ...prevState, s: maRecherche }
    });
  }

  const openPopup = (e, id) => {

    

    axios("https://api.themoviedb.org/3/movie/"+ id +"?api_key=8400f8e7e485871738542e04b6eabdd4&language=fr-FR").then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });


    //AFFICHAGE LISTE
    //https://api.themoviedb.org/3/discover/movie?api_key=8400f8e7e485871738542e04b6eabdd4


    //Affichage des crédits
    axios("https://api.themoviedb.org/3/movie/"+ id +"/credits?api_key=8400f8e7e485871738542e04b6eabdd4").then(({ data }) => {
      let credit = data;

      //console.log(credit);

      setState(prevState => {
        return { ...prevState, credits: credit.cast }
      });
    });

      //Affichage des Release date
      axios("https://api.themoviedb.org/3/movie/"+ id +"/release_dates?api_key=8400f8e7e485871738542e04b6eabdd4").then(({ data }) => {
        let release = data;
  
        console.log(release);
  
        setState(prevState => {
          return { ...prevState, release: release.results }
        });
      });


  }



  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="container">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search recherche={recherche} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.title != "undefined") ? <Popup selected={state.selected}  credits={state.credits} release={state.release}  closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App
