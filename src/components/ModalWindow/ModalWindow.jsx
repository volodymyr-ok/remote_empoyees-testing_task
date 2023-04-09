import React from 'react';
import {
  CloseBtn,
  Container,
  ContentWrapper,
  Descr,
  Image,
  ImageWrapper,
  Title,
} from './ModalWindow.styled';
import { MdOutlineClose } from 'react-icons/md';

const ModalWindow = ({ closeModal, content: { imageURI, title, description } }) => {
  return (
    <Container>
      <CloseBtn onClick={() => closeModal()}>
        <MdOutlineClose size={20} />
      </CloseBtn>

      <ImageWrapper>
        <Image src={imageURI} alt={title} />
      </ImageWrapper>

      <ContentWrapper>
        <Title>{title}</Title>
        <Descr>{description}</Descr>
      </ContentWrapper>
    </Container>
  );
};

export default ModalWindow;
