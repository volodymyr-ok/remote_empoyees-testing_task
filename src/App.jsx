import 'modern-normalize/modern-normalize.css';
import { GlobalStyles } from './GlobalStyles';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Home from './pages/Home/Home';
import Recommendation from './pages/Recommendation/Recommendation';
import Explore from './pages/Explore/Explore';
import Help from './pages/Help/Help';
import About from './pages/About/About';

function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="/recommendation" element={<Recommendation />} />

          <Route path="/explore" element={<Explore />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<div>NOT FOUND</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
