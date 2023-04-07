import React from 'react';
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
} from './EditorsPick.styled';

const EditorsPick = () => {
  const cardList = [
    {
      imageURI: require('../../assets/img/flatiron.jpg'),
      place: 'Flatiron',
      location: 'USA',
      description:
        'Ad lorem aliquid laoreet pri, possim iisque ad vim. Te graecis maluisset eum. Sit no platonem consetetur mediocritatem, in alienum.',
    },
    {
      imageURI: require('../../assets/img/Torii.jpg'),
      place: 'Antelope Canyon',
      location: 'USA',
      description:
        'Laudem labore eruditi qui ex, ullamcorper suscipiantur usu ut. Mazim elitr et his, id mei enim pertinax.',
    },
    {
      imageURI: require('../../assets/img/golden_gate.jpg'),
      place: 'Golden Gate',
      location: 'USA',
      description:
        'No nec torquatos incorrupte quaerendum. Quaeque phaedrum efficiantur qui in. Vel nobis munere epicurei ea.',
    },
    {
      imageURI: require('../../assets/img/antelope_canyon.jpg'),
      place: 'Antelope Canyon',
      location: 'USA',
      description:
        'Laudem labore eruditi qui ex, ullamcorper suscipiantur usu ut. Mazim elitr et his, id mei enim pertinax.',
    },
    {
      imageURI: require('../../assets/img/serpentine_road.jpg'),
      place: 'Lake Louise',
      location: 'Canada',
      description:
        'No nec torquatos incorrupte quaerendum. Quaeque phaedrum efficiantur qui in. Vel nobis munere epicurei ea.',
    },
  ];

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

          <List>
            {cardList.map(({ imageURI, place, location, description }) => (
              <Item key={imageURI}>
                <Image src={imageURI} alt={place} />

                <DescrWrap>
                  <Title>{place}</Title>

                  <SubTitle>{location}</SubTitle>

                  <Description>{description}</Description>
                </DescrWrap>
              </Item>
            ))}
          </List>
        </Container>
      </Section>
    </>
  );
};

export default EditorsPick;
