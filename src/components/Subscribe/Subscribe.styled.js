import styled from 'styled-components';
import { StyledButton } from '../BtnReadMore/BtnReadMore';
import DottedWorldMap from '../../assets/svg/world-map-dots.svg';
import { colors, device } from '../../utils/styles';

export const Section = styled.section`
  background-image: url(${DottedWorldMap});
  background-size: center;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Container = styled.div`
  width: calc(100% - 40px);
  margin: 0 auto;
  padding: 118px 0 150px;

  border-top: 2px solid ${colors.border};

  ${device.wide} {
    width: calc(100% - 118px * 2);
    padding: 118px 118px 150px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 92px;

  font-size: 12px;
  font-weight: 800;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 12px;
  left: 20px;

  color: ${({ isTransparent }) => (isTransparent ? 'transparent' : colors.minorText)};
  font-weight: 700;
  font-size: 12px;

  cursor: text;
`;

export const Input = styled.input`
  width: 280px;
  height: 36px;
  padding: 12px 20px;

  border-radius: 20px;
  border: 0px solid transparent;

  color: ${colors.minorText};
  font-size: 12px;
  font-weight: 700;

  :focus {
    outline: 2px solid transparent;

    + label {
      color: white;

      top: -12px;
      font-size: 10px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const Button = styled(StyledButton)`
  font-weight: 700;
  :disabled:hover,
  :disabled:focus {
    background-color: ${colors.mainAccent};
    cursor: not-allowed;
  }
`;
