import styled from 'styled-components';
import { colors, device } from '../../utils/styles';

export const Section = styled.section`
  min-height: 120vh;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0px 0px 200px 100vw ${colors.tintShadow};
  -webkit-box-shadow: inset 0px 0px 200px 100vw ${colors.tintShadow};

  ${device.narrow} {
    background-image: url(${({ bg }) => bg.lakeImgNarrow});
  }

  ${device.wide} {
    background-image: url(${({ bg }) => bg.lakeImgWide});
  }
`;

export const Container = styled.div`
  ${device.wide} {
    width: 100%;
    padding-top: 90px;
    height: 100vh;
    display: flex;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  ${device.narrow} {
    padding: 20px;
    height: calc(100vh - 200px);
    justify-content: center;
  }
  ${device.limited} {
    padding-left: 20vw;
  }

  ${device.wide} {
    margin: auto 0 auto 118px;
  }
`;

export const Title = styled.h1`
  font-size: 34px;
  max-width: 280px;

  ${device.wide} {
    font-size: 54px;
    max-width: 360px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;

  ${device.narrow} {
    max-width: 280px;
  }

  ${device.wide} {
    max-width: 360px;
  }
`;
