import React from 'react';
import {
  Aside,
  Button,
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

const OutdoorsEdition = () => {
  const cardList = [
    {
      place: 'Ollantaytambo',
      location: 'Peru',
      description:
        'Ad lorem aliquid laoreet pri, possim iisque ad vim. Te graecis maluisset eum. Sit no platonem consetetur mediocritatem, in alienum.',
      imageURI: require('../../assets/img/ollantaytambo.jpg'),
    },
    {
      place: 'Antelope Canyon',
      location: 'USA',
      description:
        'Laudem labore eruditi qui ex, ullamcorper suscipiantur usu ut. Mazim elitr et his, id mei enim pertinax.',
      imageURI: require('../../assets/img/antelope_canyon-Main.jpg'),
    },
    {
      place: 'Lake Louise',
      location: 'Canada',
      description:
        'No nec torquatos incorrupte quaerendum. Quaeque phaedrum efficiantur qui in. Vel nobis munere epicurei ea.',
      imageURI: require('../../assets/img/lake_louise.jpg'),
    },
  ];

  return (
    <>
      <Section>
        <Container>
          <Aside>
            <MainTitle>Featured spots</MainTitle>

            <MainDescr>Some of featured spot that you might want visit before you die</MainDescr>

            <MainLink href={'./'} target="_blank" rel="noreferrer noopener">
              View all
            </MainLink>
          </Aside>

          <List>
            {cardList.map(({ imageURI, place, location, description }) => (
              <Item>
                <CardWrap>
                  <ImageWrap>
                    <Image src={imageURI} alt={place} />
                  </ImageWrap>

                  <Title>{place}</Title>

                  <SubTitle>{location}</SubTitle>

                  <Description>{description}</Description>
                </CardWrap>

                <Button>Read more</Button>
              </Item>
            ))}
          </List>
        </Container>
      </Section>
    </>
  );
};

export default OutdoorsEdition;
