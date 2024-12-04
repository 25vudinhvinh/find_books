import Home from '~/pages/Home/Home.js';
import Music from '~/pages/Music/Music.js';
import Podcast from '~/pages/Podcast/Podcast.js';

const publicRoute = [
  { path: '/', element: Home },
  { path: '/music', element: Music },
  { path: '/podcast', element: Podcast }
];

export { publicRoute };
