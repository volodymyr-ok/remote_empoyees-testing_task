import styled from 'styled-components';
import { StyledButton } from '../BtnReadMore/BtnReadMore';
import DottedWorldMap from '../../assets/svg/world-map-dots.svg';
import { colors } from '../../utils/repeatStyles';

export const Section = styled.section`
  position: relative;

  /* min-height: 504px; */
  background-image: url(${DottedWorldMap});
  background-size: center;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Container = styled.div`
  margin: 0 118px;
  padding: 118px 0 150px;
  border-top: 1px solid ${colors.descrText};
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: 12px;
  /* line-height: 40px; */
  text-align: center;
  margin-bottom: 92px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 12px;
  left: 20px;

  cursor: text;

  color: ${({ isTransparent }) => (isTransparent ? 'transparent' : colors.minorText)};
  font-weight: 700;
  font-size: 12px;
`;

export const Input = styled.input`
  width: 392px;
  height: 36px;
  border-radius: 20px;
  border: 0px solid transparent;
  padding: 12px 20px;

  color: ${colors.minorText};
  font-weight: 700;
  font-size: 12px;

  :focus {
    otline: 2px solid transparent;
    border: none;

    + label {
      color: white;

      top: -12px;
      font-size: 10px;
    }
  }
`;

export const Button = styled(StyledButton)`
  font-weight: 700;
`;
