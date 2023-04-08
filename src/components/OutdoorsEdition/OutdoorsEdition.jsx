import React, { useState } from 'react';
import {
  Aside,
  Link,
  CardWrap,
  Container,
  Description,
  Image,
  ImageWrap,
  Item,
  List,
  MainDescr,
  MainLink,
  MainTitle,
  Section,
  SubTitle,
  Title,
} from './OutdoorsEdition.styled';
import PaginationBar from '../PaginationBar/PaginationBar';
import PaginationInfo from '../PaginationInfo/PaginationInfo';

const cardList = [
  {
    uri: 'https://en.wikipedia.org/wiki/Ollantaytambo',
    place: 'Ollantaytambo',
    location: 'Peru',
    description:
      'Ad lorem aliquid laoreet pri, possim iisque ad vim. Te graecis maluisset eum. Sit no platonem consetetur mediocritatem, in alienum.',
    imageURI: require('../../assets/img/ollantaytambo.jpg'),
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Antelope_Canyon',
    place: 'Antelope Canyon',
    location: 'USA',
    description:
      'Laudem labore eruditi qui ex, ullamcorper suscipiantur usu ut. Mazim elitr et his, id mei enim pertinax.',
    imageURI: require('../../assets/img/antelope_canyon-Main.jpg'),
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Lake_Louise,_Alberta',
    place: 'Lake Louise',
    location: 'Canada',
    description:
      'No nec torquatos incorrupte quaerendum. Quaeque phaedrum efficiantur qui in. Vel nobis munere epicurei ea.',
    imageURI: require('../../assets/img/lake_louise.jpg'),
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Colosseum',
    place: 'Colosseum',
    location: 'Italy',
    description:
      'It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age.',
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/405px-Colosseo_2020.jpg',
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Eiffel_Tower',
    place: 'Eiffel Tower',
    location: 'France',
    description:
      "The tower has three levels for visitors, with restaurants on the first and second levels. The top level's upper platform is 276 m (906 ft) above the ground – the highest observation deck accessible to the public in the European Union.",
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/375px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Statue_of_Liberty',
    place: 'Statue of Liberty',
    location: 'USA',
    description:
      'The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.',
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg/375px-Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg',
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Louvre',
    place: 'Louvre',
    location: 'France',
    description:
      "A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward) and home to some of the most canonical works of Western art, including the Mona Lisa and the Venus de Milo.",
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Louvre_aile_Richelieu.jpg/405px-Louvre_aile_Richelieu.jpg',
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Great_Wall_of_China',
    place: 'Great Wall of China',
    location: 'China',
    description:
      'The collection of fortifications known as the Great Wall of China has historically had a number of different names in both Chinese and English.',
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/375px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg',
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Machu_Picchu',
    place: 'Machu Picchu',
    location: 'Peru',
    description:
      'Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge.',
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Before_Machu_Picchu.jpg/450px-Before_Machu_Picchu.jpg',
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Taj_Mahal',
    place: 'Taj Mahal',
    location: 'India',
    description:
      'No nec torquatos incorrupte quaerendum. Quaeque phaedrum efficiantur qui in. Vel nobis munere epicurei ea.',
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/375px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg',
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Grand_Canyon',
    place: 'Grand Canyon',
    location: 'USA',
    description:
      'President Theodore Roosevelt was a major proponent of the preservation of the Grand Canyon area and visited it on numerous occasions to hunt and enjoy the scenery.',
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Canyon_River_Tree_%28165872763%29.jpeg/432px-Canyon_River_Tree_%28165872763%29.jpeg',
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Eiffel_Tower',
    place: 'Eiffel Tower',
    location: 'France',
    description:
      "The tower has three levels for visitors, with restaurants on the first and second levels. The top level's upper platform is 276 m (906 ft) above the ground – the highest observation deck accessible to the public in the European Union.",
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/375px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
  },

  {
    uri: 'https://en.wikipedia.org/wiki/Statue_of_Liberty',
    place: 'Statue of Liberty',
    location: 'USA',
    description:
      'The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.',
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg/375px-Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg',
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Louvre',
    place: 'Louvre',
    location: 'France',
    description:
      "A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward) and home to some of the most canonical works of Western art, including the Mona Lisa and the Venus de Milo.",
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Louvre_aile_Richelieu.jpg/405px-Louvre_aile_Richelieu.jpg',
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Ollantaytambo',
    place: 'Ollantaytambo',
    location: 'Peru',
    description:
      'Ad lorem aliquid laoreet pri, possim iisque ad vim. Te graecis maluisset eum. Sit no platonem consetetur mediocritatem, in alienum.',
    imageURI: require('../../assets/img/ollantaytambo.jpg'),
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Antelope_Canyon',
    place: 'Antelope Canyon',
    location: 'USA',
    description:
      'Laudem labore eruditi qui ex, ullamcorper suscipiantur usu ut. Mazim elitr et his, id mei enim pertinax.',
    imageURI: require('../../assets/img/antelope_canyon-Main.jpg'),
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Lake_Louise,_Alberta',
    place: 'Lake Louise',
    location: 'Canada',
    description:
      'No nec torquatos incorrupte quaerendum. Quaeque phaedrum efficiantur qui in. Vel nobis munere epicurei ea.',
    imageURI: require('../../assets/img/lake_louise.jpg'),
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Colosseum',
    place: 'Colosseum',
    location: 'Italy',
    description:
      'It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age.',
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/405px-Colosseo_2020.jpg',
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Eiffel_Tower',
    place: 'Eiffel Tower',
    location: 'France',
    description:
      "The tower has three levels for visitors, with restaurants on the first and second levels. The top level's upper platform is 276 m (906 ft) above the ground – the highest observation deck accessible to the public in the European Union.",
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/375px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
  },

  {
    uri: 'https://en.wikipedia.org/wiki/Statue_of_Liberty',
    place: 'Statue of Liberty',
    location: 'USA',
    description:
      'The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.',
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg/375px-Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg',
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Louvre',
    place: 'Louvre',
    location: 'France',
    description:
      "A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward) and home to some of the most canonical works of Western art, including the Mona Lisa and the Venus de Milo.",
    imageURI:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Louvre_aile_Richelieu.jpg/405px-Louvre_aile_Richelieu.jpg',
  },
  {
    uri: 'https://en.wikipedia.org/wiki/Ollantaytambo',
    place: 'Ollantaytambo',
    location: 'Peru',
    description:
      'Ad lorem aliquid laoreet pri, possim iisque ad vim. Te graecis maluisset eum. Sit no platonem consetetur mediocritatem, in alienum.',
    imageURI: require('../../assets/img/ollantaytambo.jpg'),
  },
];

const OutdoorsEdition = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = Math.ceil(cardList.length / 3);

  const currentContent = () => {
    const sliceStart = currentPage > 1 ? 3 * (currentPage - 1) : 0;
    const sliceEnd = currentPage >= pagesCount ? cardList.length : sliceStart + 3;

    return cardList.slice(sliceStart, sliceEnd);
  };

  const info = { currentPage, pagesCount };

  return (
    <>
      <Section>
        <Container>
          <PaginationBar info={info} setPage={setCurrentPage} sectionName="Outdoors Edition" />

          <Aside>
            <MainTitle>Featured spots</MainTitle>

            <MainDescr>Some of featured spot that you might want visit before you die</MainDescr>

            <MainLink
              href={'https://en.wikipedia.org/wiki/Main_Page'}
              target="_blank"
              rel="noreferrer noopener"
            >
              View all
            </MainLink>
          </Aside>

          <List>
            {currentContent().map(({ uri, imageURI, place, location, description }) => (
              <Item key={imageURI}>
                <CardWrap>
                  <ImageWrap>
                    <Image src={imageURI} alt={place} />
                  </ImageWrap>

                  <Title>{place}</Title>

                  <SubTitle>{location}</SubTitle>

                  <Description>{description}</Description>
                </CardWrap>

                <Link href={uri} target="_blank" rel="noreferrer noopener">
                  Read more
                </Link>
              </Item>
            ))}
          </List>
        </Container>

        <PaginationInfo info={info} sectionName="Outdoors Edition" />
      </Section>
    </>
  );
};

export default OutdoorsEdition;
