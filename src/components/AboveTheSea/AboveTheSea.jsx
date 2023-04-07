import React from 'react';
import { Content, Descr, Image, ImageWrap, Quote, Section, Title } from './AboveTheSea.styled';
import BtnReadMore from '../BtnReadMore/BtnReadMore';

const AboveTheSea = () => {
  return (
    <Section>
      <ImageWrap>
        <Image src={require('../../assets/img/aboce_the_sea.jpg')} alt="above the sea" />
      </ImageWrap>

      <Content>
        <Title>Above the sea</Title>

        <Quote>
          <span>“</span>Eros reque munere ut quo, commodo ullamcorper ad eam. His aeterno scriptorem
          ei, sea ut epicuri tincidunt. ”
        </Quote>

        <Descr>
          <p>
            Cu eum causae bonorum. Te pri ornatus probatus, an postea nemore iuvaret sea. Mea te
            rebum virtute, ullum facilisi comprehensam nec eu. At facer latine nec, te nonumy
            disputationi reprehendunt usu, ut nam unum integre qualisque. Nulla possit mandamus ne
            vix.
          </p>
          <pre />
          <p>
            Mea ea simul quaeque vocibus. Est ut verear voluptatum, vis at illud discere. Volumus
            rationibus cu sea, et summo ocurreret per, sit no audire scribentur. Vim et brute
            moderatius comprehensam. Argumentum disputando ea mel, sed clita congue an, equidem
            maluisset disputando ei ius. Vel ne enim duis. Nec ignota instructior te. Ipsum
            tacimates adversarium ut his. Fastidii adipisci ei cum, eum tollit percipit ne. Diam
            tantas te nec.
          </p>
        </Descr>

        <BtnReadMore />
      </Content>
    </Section>
  );
};

export default AboveTheSea;
