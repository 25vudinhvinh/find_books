import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from '~/pages/Home/Home.js';
import Music from '~/pages/Music/Music.js';
import Podcast from '~/pages/Podcast/Podcast.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/podcast" element={<Podcast />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
