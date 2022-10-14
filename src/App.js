import './App.css';
import Home from "./pages/home"
import Result from "./pages/result"
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import SearchState from './context/searchState';

function App() {
  return (
    <div className="App">
        <SearchState>
          <BrowserRouter>
            <Routes>
              <Route path = "/" element = {<Home/>} />
              <Route path = "/searchResult" element = {<Result/>} />
            </Routes>
          </BrowserRouter>
        </SearchState>
    </div>
  );
}

export default App;
