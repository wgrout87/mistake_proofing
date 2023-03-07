import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SiteProvider } from './utils/GlobalState';

import Home from './pages/Home';
import Header from './components/Header';
import Examples from './pages/Examples';
import BlogsAndVlogs from './pages/BlogsAndVlogs';
import Books from './pages/Books';
import Articles from './pages/Articles';
import Glossary from './pages/Glossary';

function App() {
  return (
    <div className="App">
      <Router>
        <SiteProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/examples' element={<Examples />} />
            <Route path='/blogsandvlogs' element={<BlogsAndVlogs />} />
            <Route path='/books' element={<Books />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/glossary' element={<Glossary />} />
          </Routes>
        </SiteProvider>
      </Router>
    </div>
  );
}

export default App;
