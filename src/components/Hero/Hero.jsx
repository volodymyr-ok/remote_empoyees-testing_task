import React, { useState } from 'react';
import { Container, MainContent, Section, Text, Title } from './Hero.styled';
import AsideNav from '../AsideNav/AsideNav';
import BtnReadMore from '../BtnReadMore/BtnReadMore';
import BackdropPortal from '../BackdropPortal/BackdropPortal';
import ModalWindow from '../ModalWindow/ModalWindow';

const heroContent = {
  title: 'The Walchen Lake',
  description:
    'One of the deepest and largest alpine lakes in Germany and one of the best outdoors place that you never imagine before.',
  lakeImgNarrow: require('../../assets/img/mainBgMobile.jpg'),
  lakeImgWide: require('../../assets/img/mainBg.jpg'),
  imageURI: require('../../assets/img/mainBgMobile.jpg'),
};

const Hero = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModal = () => setIsModalOpened(!isModalOpened);
  const closeModal = () => setIsModalOpened(false);

  return (
    <>
      <Section bg={heroContent}>
        <Container>
          <AsideNav />

          <MainContent>
            <Title>{heroContent.title}</Title>

            <Text>{heroContent.description}</Text>

            <BtnReadMore toggleModal={toggleModal} />
          </MainContent>
        </Container>
      </Section>

      {isModalOpened && (
        <BackdropPortal closeModal={closeModal}>
          <ModalWindow content={heroContent} closeModal={closeModal} />
        </BackdropPortal>
      )}
    </>
  );
};

export default Hero;
