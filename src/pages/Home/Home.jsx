import React from 'react';
import Hero from '../../components/Hero/Hero';
import OutdoorsEdition from '../../components/OutdoorsEdition/OutdoorsEdition';
import AboveTheSea from '../../components/AboveTheSea/AboveTheSea';
import Subscribe from '../../components/Subscribe/Subscribe';
import EditorsPick from '../../components/EditorsPick/EditorsPick';

const Home = () => {
  return (
    <>
      <Hero />

      <OutdoorsEdition />

      <AboveTheSea />

      <EditorsPick />

      <Subscribe />
    </>
  );
};

export default Home;
