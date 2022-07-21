import { convertPixelToRem, flex } from 'css-blocks-styled-components';
import styled from 'styled-components';

import IntroBackground from '../../assets/intro-background.svg';

export const IntroContainer = styled.div`
  margin-top: ${convertPixelToRem(90)};
  background-image: url(${IntroBackground});
`;

export const Wrapper = styled.div`
  display: flex;
  gap: ${convertPixelToRem(50)};
  max-width: 80%;
  margin: 0 auto;

  div:first-of-type {
    max-width: ${convertPixelToRem(600)};
  }
`;

export const Title = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 48px;
    color: ${({ theme }) => theme.colors.title};
  }

  span {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.title};
  }
`;

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${convertPixelToRem(50)};
`;

interface ItemProps {
  $background: string;
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  width: ${convertPixelToRem(300)};
  margin-bottom: ${convertPixelToRem(25)};

  div {
    ${flex.middle}
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ $background }) => $background};
  }

  span {
    color: ${({ theme }) => theme.colors['gray-500']};
    font-size: ${convertPixelToRem(16)};
  }
`;
