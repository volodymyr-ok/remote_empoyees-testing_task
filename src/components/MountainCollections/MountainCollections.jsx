import React, { useState } from 'react';
import {
  Background,
  Container,
  Descr,
  DescrWrapper,
  Image,
  ImageWrapper,
  Item,
  List,
  MainDescr,
  MainTitle,
  Section,
  SubDescr,
  SubTitle,
  Title,
} from './MountainCollections.styled';
import BtnReadMore from '../BtnReadMore/BtnReadMore';
import BackdropPortal from '../BackdropPortal/BackdropPortal';
import ModalWindow from '../ModalWindow/ModalWindow';

const collections = [
  {
    name: 'Southern Mountain',
    location: 'South Country',
    description:
      'Lorem ipsum dolor sit amet, te eam oratio imperdiet, nam an vidisse admodum omittantur, nihil corrumpit an cum. Cu iriure dignissim consequat quo, usu id ceteros ponderum. Ea vel malis iudico quodsi, ex nam error suscipit prodesset. Qui an deserunt imperdiet. Case temporibus qui ut.',
    subDescription:
      'Definitiones ad vim. Et case quodsi complectitur ius, in vel regione viderer. Cu sed fugit adolescens. Ad mea latine percipit, unum dicat habemus et mel.',
    imageURI: require('../../assets/img/southern.jpg'),
  },
  {
    name: 'Norhern Mountain',
    location: 'North Country',
    description:
      'Lorem ipsum dolor sit amet, te eam oratio imperdiet, nam an vidisse admodum omittantur, nihil corrumpit an cum. Cu iriure dignissim consequat quo, usu id ceteros ponderum. Ea vel malis iudico quodsi, ex nam error suscipit prodesset. Qui an deserunt imperdiet. Case temporibus qui ut.',
    subDescription:
      'Definitiones ad vim. Et case quodsi complectitur ius, in vel regione viderer. Cu sed fugit adolescens. Ad mea latine percipit, unum dicat habemus et mel.',
    imageURI: require('../../assets/img/northern.jpg'),
  },
  {
    name: 'Eastern Mountain',
    location: 'East Country',
    description:
      'Lorem ipsum dolor sit amet, te eam oratio imperdiet, nam an vidisse admodum omittantur, nihil corrumpit an cum. Cu iriure dignissim consequat quo, usu id ceteros ponderum. Ea vel malis iudico quodsi, ex nam error suscipit prodesset. Qui an deserunt imperdiet. Case temporibus qui ut.',
    subDescription:
      'Definitiones ad vim. Et case quodsi complectitur ius, in vel regione viderer. Cu sed fugit adolescens. Ad mea latine percipit, unum dicat habemus et mel.',
    imageURI: require('../../assets/img/eastern.jpg'),
  },
];

const MountainCollections = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleModal = content => {
    setModalContent(content);
    setIsModalOpened(!isModalOpened);
  };

  const closeModal = () => setIsModalOpened(false);

  return (
    <>
      <Section>
        <Background />

        <Container>
          <MainTitle>Mountain collections</MainTitle>
          <MainDescr>
            See our best mountain collections, explore and Lorem ipsum dolor sit amet, te eam oratio
            imperdiet, nam an vidisse admodum omittantur, nihil corrumpit an cum.
          </MainDescr>

          <List>
            {collections.map(item => {
              const { name, location, description, subDescription, imageURI } = item;
              const popUpContent = {
                title: name,
                description,
                imageURI,
              };

              return (
                <Item key={name}>
                  <DescrWrapper>
                    <Title>{name}</Title>
                    <SubTitle>{location}</SubTitle>
                    <Descr>{description}</Descr>
                    <SubDescr>{subDescription}</SubDescr>

                    <BtnReadMore toggleModal={() => toggleModal(popUpContent)} />
                  </DescrWrapper>

                  <ImageWrapper>
                    <Image src={imageURI} />
                  </ImageWrapper>
                </Item>
              );
            })}
          </List>
        </Container>
      </Section>

      {isModalOpened && (
        <BackdropPortal closeModal={closeModal}>
          <ModalWindow content={modalContent} closeModal={closeModal} />
        </BackdropPortal>
      )}
    </>
  );
};

export default MountainCollections;
