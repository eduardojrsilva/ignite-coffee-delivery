import styled from 'styled-components';
import { convertPixelToRem } from 'css-blocks-styled-components';

export const Wrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  max-width: 80%;
  margin: 0 auto;

  > div {
    display: flex;
    gap: 12px;

    span,
    button {
      padding: 8px;
      border-radius: 6px;
    }

    span {
      display: flex;
      align-items: center;
      gap: 4px;
      background: ${({ theme }) => theme.colors['purple-100']};
      color: ${({ theme }) => theme.colors['purple-800']};
      font-size: ${convertPixelToRem(14)};
      min-height: 18px;

      svg {
        color: ${({ theme }) => theme.colors['purple-500']};
      }
    }

    button {
      border: 0;
      background: ${({ theme }) => theme.colors['yellow-100']};
      color: ${({ theme }) => theme.colors['yellow-800']};
    }
  }
`;
