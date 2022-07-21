import { convertPixelToRem, flex, getBoxWidthAndHeight } from 'css-blocks-styled-components';
import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Baloo 2';
`;

export const CoffeesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: ${convertPixelToRem(30)} 0;
`;

export const CoffeCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  width: ${convertPixelToRem(250)};
  padding: 20px;
  background: ${({ theme }) => theme.colors['gray-100']};
  border-radius: 6px 36px;

  > h2 {
    font-family: 'Baloo 2';
    font-size: ${convertPixelToRem(20)};
    color: ${({ theme }) => theme.colors.subtitle};
  }

  > span {
    font-size: ${convertPixelToRem(14)};
    color: ${({ theme }) => theme.colors['gray-300']};
    height: ${convertPixelToRem(48)};
  }
`;

export const Categories = styled.div`
  display: flex;
  gap: 5px;

  span {
    text-transform: uppercase;
    background: ${({ theme }) => theme.colors['yellow-100']};
    color: ${({ theme }) => theme.colors['yellow-800']};
    font-size: ${convertPixelToRem(10)};
    font-weight: 700;
    padding: 4px 8px;
    border-radius: 100px;
  }
`;

export const BuyContainer = styled.div`
  display: flex;
  gap: 20px;

  > span {
    color: ${({ theme }) => theme.colors['gray-500']};
    font-family: 'Baloo 2';
    font-size: ${convertPixelToRem(24)};
    font-weight: 800;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px;
    height: ${convertPixelToRem(38)};
    border-radius: 6px;
    background: ${({ theme }) => theme.colors['gray-200']};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${convertPixelToRem(18)};

    button {
      background: transparent;
      border: 0;
      ${flex.middle}
      color: ${({ theme }) => theme.colors['purple-500']};
      ${getBoxWidthAndHeight(15)}
      font-size: ${convertPixelToRem(18)};
    }
  }

  > button {
    padding: 8px;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors['purple-800']};
    border: 0;
    transition: background-color 0.3s;

    :hover {
      background: ${({ theme }) => theme.colors['purple-500']};
    }
  }
`;
