
import { dummy } from './movieDummy.js'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home'
import Movies from './pages/Movies.jsx';


import NotFound from './pages/NotFound'
import MovieDetail from './components/MovieDetail/MovieDetail.jsx';


function App() {


  // title overview
  return (
    <div className='root-app'>
      <BrowserRouter>
        {/* 여기에는 각 페이지에 공통적으로 들어가는 헤드 부분  */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:title" element={<MovieDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>




      {/* */}
    </div >
  );
}

export default App;
