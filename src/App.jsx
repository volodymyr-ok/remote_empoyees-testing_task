import 'modern-normalize/modern-normalize.css';
import { GlobalStyles } from './GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import OutdoorsEdition from './components/OutdoorsEdition/OutdoorsEdition';

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />
      <main>
        <Hero />
        <OutdoorsEdition />
      </main>
      <Footer />
    </>
  );
}

export default App;
