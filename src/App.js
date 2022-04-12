import './App.css';
import requests from './utils/requests'
import Row from './components/Row/Row';
import Banner from './components/Banner/Banner';
import Nav from './components/Navbar/Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Documentaries " fetchURL={requests.fetchDocumentaries} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Action Movies" fetchURL={requests.fetchActioMovies} />
    </div>
  );
}

export default App;
