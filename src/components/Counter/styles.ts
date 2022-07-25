import styled from 'styled-components';
import { convertPixelToRem, flex, getBoxWidthAndHeight } from 'css-blocks-styled-components';

export const Container = styled.div`
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
    outline: 0;

    :focus {
      border: 1px solid ${({ theme }) => theme.colors['purple-500']};
    }
  }
`;
