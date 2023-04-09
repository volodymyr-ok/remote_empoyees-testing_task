import React, { useState } from 'react';
import {
  Aside,
  Container,
  AsideDescr,
  AsideTitle,
  Section,
  List,
  Item,
  Image,
  DescrWrap,
  Title,
  SubTitle,
  Description,
  ContentWrapper,
} from './EditorsPick.styled';
import Pagination from '../Pagination/Pagination';
import BackdropPortal from '../BackdropPortal/BackdropPortal';
import ModalWindow from '../ModalWindow/ModalWindow';

const cardList = [
  {
    imageURI: require('../../assets/img/flatiron.jpg'),
    place: 'Flatiron',
    location: 'USA',
    description:
      'Ad lorem aliquid laoreet pri, possim iisque ad vim. Te graecis maluisset eum. Sit no platonem consetetur mediocritatem, in alienum.',
    index: 1,
  },
  {
    imageURI: require('../../assets/img/Torii.jpg'),
    place: 'Torii',
    location: 'JAPAN',
    description:
      'Laudem labore eruditi qui ex, ullamcorper suscipiantur usu ut. Mazim elitr et his, id mei enim pertinax.',
    index: 2,
  },
  {
    imageURI: require('../../assets/img/golden_gate.jpg'),
    place: 'Golden Gate',
    location: 'USA',
    description:
      'No nec torquatos incorrupte quaerendum. Quaeque phaedrum efficiantur qui in. Vel nobis munere epicurei ea.',
    index: 3,
  },
  {
    imageURI: require('../../assets/img/antelope_canyon.jpg'),
    place: 'Antelope Canyon',
    location: 'USA',
    description:
      'Laudem labore eruditi qui ex, ullamcorper suscipiantur usu ut. Mazim elitr et his, id mei enim pertinax.',
    index: 4,
  },
  {
    imageURI: require('../../assets/img/serpentine_road.jpg'),
    place: 'Transfagarash',
    location: 'Romania',
    description:
      'No nec torquatos incorrupte quaerendum. Quaeque phaedrum efficiantur qui in. Vel nobis munere epicurei ea.',
    index: 5,
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Colosseum',
    place: 'Colosseum',
    location: 'Italy',
    description:
      'It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age.',
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/405px-Colosseo_2020.jpg',
    index: 6,
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Eiffel_Tower',
    place: 'Eiffel Tower',
    location: 'France',
    description:
      "The tower has three levels for visitors, with restaurants on the first and second levels. The top level's upper platform is 276 m (906 ft) above the ground – the highest observation deck accessible to the public in the European Union.",
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/375px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
    index: 7,
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Statue_of_Liberty',
    place: 'Statue of Liberty',
    location: 'USA',
    description:
      'The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.',
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg/375px-Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg',
    index: 8,
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Louvre',
    place: 'Louvre',
    location: 'France',
    description:
      "A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward) and home to some of the most canonical works of Western art, including the Mona Lisa and the Venus de Milo.",
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Louvre_aile_Richelieu.jpg/405px-Louvre_aile_Richelieu.jpg',
    index: 9,
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Great_Wall_of_China',
    place: 'Great Wall of China',
    location: 'China',
    description:
      'The collection of fortifications known as the Great Wall of China has historically had a number of different names in both Chinese and English.',
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/375px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg',
    index: 10,
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Machu_Picchu',
    place: 'Machu Picchu',
    location: 'Peru',
    description:
      'Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge.',
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Before_Machu_Picchu.jpg/450px-Before_Machu_Picchu.jpg',
    index: 11,
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Taj_Mahal',
    place: 'Taj Mahal',
    location: 'India',
    description:
      'No nec torquatos incorrupte quaerendum. Quaeque phaedrum efficiantur qui in. Vel nobis munere epicurei ea.',
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/375px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg',
    index: 12,
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Grand_Canyon',
    place: 'Grand Canyon',
    location: 'USA',
    description:
      'President Theodore Roosevelt was a major proponent of the preservation of the Grand Canyon area and visited it on numerous occasions to hunt and enjoy the scenery.',
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Canyon_River_Tree_%28165872763%29.jpeg/432px-Canyon_River_Tree_%28165872763%29.jpeg',
    index: 13,
  },
];

const EditorsPick = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortingType, setSortingType] = useState('');

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleModal = content => {
    setModalContent(content);
    setIsModalOpened(!isModalOpened);
  };
  const closeModal = () => setIsModalOpened(false);

  const pagesCount = Math.ceil(cardList.length / 5);

  const currentContent = () => {
    const compare = (a, b) => {
      let sort = 0;
      if (sortingType === 'default') a.index < b.index ? (sort = -1) : (sort = 1);
      if (sortingType === 'place') a.place < b.place ? (sort = -1) : (sort = 1);
      if (sortingType === 'location') a.location < b.location ? (sort = -1) : (sort = 1);
      return sort;
    };

    cardList.sort(compare);

    const sliceStart = currentPage > 1 ? 5 * (currentPage - 1) : 0;
    const sliceEnd = currentPage >= pagesCount ? cardList.length : sliceStart + 5;

    return cardList.slice(sliceStart, sliceEnd);
  };

  const config = {
    currentPage,
    pagesCount,
    sectionName: "Editor's Pick",
    setCurrentPage,
    setSortingType,
    needCtrls: true,
    needSort: true,
  };

  return (
    <>
      <Section>
        <Container>
          <Aside>
            <AsideTitle>Editor's pick</AsideTitle>

            <AsideDescr>
              Our picks, just for you nam an vidisse admodum omittantur, nihil corrumpit
            </AsideDescr>
          </Aside>

          <ContentWrapper>
            <Pagination config={config} />

            <List>
              {currentContent().map(({ imageURI, place, location, description }) => {
                const popUpContent = {
                  title: place,
                  description,
                  imageURI,
                };

                return (
                  <Item
                    key={imageURI}
                    title="Click or press to open more"
                    onClick={() => toggleModal(popUpContent)}
                  >
                    <Image src={imageURI} alt={place} />

                    <DescrWrap>
                      <Title>{place}</Title>

                      <SubTitle>{location}</SubTitle>

                      <Description>{description}</Description>
                    </DescrWrap>
                  </Item>
                );
              })}
            </List>
          </ContentWrapper>
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

export default EditorsPick;
