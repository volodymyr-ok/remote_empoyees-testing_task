import React from 'react';
import Hero from '../../components/Hero/Hero';
import OutdoorsEdition from '../../components/OutdoorsEdition/OutdoorsEdition';
import AboveTheSea from '../../components/AboveTheSea/AboveTheSea';
import Subscribe from '../../components/Subscribe/Subscribe';
import EditorsPick from '../../components/EditorsPick/EditorsPick';
import MountainCollections from '../../components/MountainCollections/MountainCollections';

const Home = () => {
  return (
    <>
      <Hero />

      <OutdoorsEdition />

      <AboveTheSea />

      <EditorsPick />

      <MountainCollections />

      <Subscribe />
    </>
  );
};

export default Home;
