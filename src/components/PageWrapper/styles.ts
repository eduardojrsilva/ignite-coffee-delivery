import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { convertPixelToRem, flex } from 'css-blocks-styled-components';

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
    a {
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
  }

  > a {
    outline: 0;
    border: 1px solid transparent;

    :focus {
      border: 1px solid ${({ theme }) => theme.colors['purple-500']};
    }
  }
`;

interface CartButtonProps {
  $amountItems: number;
}

export const CartButton = styled(Link)<CartButtonProps>`
  background: ${({ theme }) => theme.colors['yellow-100']};
  color: ${({ theme }) => theme.colors['yellow-800']};
  outline: 0;
  border: 1px solid transparent;
  position: relative;

  :hover,
  :focus {
    border: 1px solid ${({ theme }) => theme.colors['yellow-800']};
  }

  ::after {
    ${({ $amountItems }) =>
      $amountItems
        ? css`
            content: '${$amountItems}';
            position: absolute;
            top: -3px;
            right: -3px;

            font-size: ${convertPixelToRem(10)};
            font-weight: 700;
            color: ${({ theme }) => theme.colors.white};
            background: ${({ theme }) => theme.colors['yellow-800']};

            ${flex.middle}
            border-radius: 50%;
            width: 15px;
            height: 15px;
          `
        : css`
            content: '';
          `}
  }
`;
