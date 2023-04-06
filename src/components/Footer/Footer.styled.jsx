import styled from 'styled-components';
import { colors } from '../../utils/repeatStyles';
import { Div } from '../CommonContainer/CommonContainer.styled';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';

// outline: 1px solid red;

export const FooterSection = styled.footer`
  height: 90px;
  background-color: ${colors.mainAccent};
  display: flex;
  align-items: center;
  color: ${colors.primaryText};
`;

export const Container = styled(Div)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Copyright = styled.p`
  font-size: 12px;
  font-weight: 900;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const IconInsta = styled(AiOutlineInstagram)`
  color: ${colors.primaryText};
`;
export const IconFace = styled(RiFacebookFill)`
  color: ${colors.primaryText};
`;
export const IconTwit = styled(AiOutlineTwitter)`
  color: ${colors.primaryText};
`;
