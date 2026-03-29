import { useState } from 'react'
import './App.css'
import FilmList from './components/FilmList/FilmList';

const FILMS = [
  { id: 1, title: 'Oppenheimer',       year: 2023, genre: 'Dramat',  rating: 5, watched: true  },
  { id: 2, title: 'Dune: Część druga', year: 2024, genre: 'Sci-Fi',  rating: 4, watched: false },
  { id: 3, title: 'Past Lives',        year: 2023, genre: 'Romans',  rating: 5, watched: true  },
  { id: 4, title: 'Poor Things',       year: 2023, genre: 'Komedia', rating: 4, watched: false },
];

function App() {

  let watchedFilms = FILMS.filter(film => film.watched);
  let unwatchedFilms = FILMS.filter(film => !film.watched);

  return (
    <>
    <div>dklsadj;ksa;kjsdklfjhsdkfasdsadsaj</div>
      <FilmList title="Do obejrzenia" films={unwatchedFilms} />
      <FilmList title="Obejrzane" films={watchedFilms} />
    </>
  )
}

export default App
