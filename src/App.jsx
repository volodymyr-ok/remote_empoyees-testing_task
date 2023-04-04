import 'modern-normalize/modern-normalize.css';
import { GlobalStyle } from './GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Header />
        <Hero />
      </main>
    </>
  );
}

export default App;
