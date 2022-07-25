import {
  convertPixelToRem,
  flex,
  getBoxWidthAndHeight,
  noBorderNoOutline,
} from 'css-blocks-styled-components';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 30px;
  padding-bottom: 12px;

  h2 {
    font-family: 'Baloo 2';
    font-size: ${convertPixelToRem(18)};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.subtitle};
    margin: ${convertPixelToRem(15)} 0;
  }

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  background: ${({ theme }) => theme.colors['gray-100']};
  border-radius: 6px;

  > button {
    padding: ${convertPixelToRem(12)} ${convertPixelToRem(8)};
    border-radius: 6px;
    border: 1px solid transparent;
    outline: 0;
    background: ${({ theme }) => theme.colors['yellow-500']};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${convertPixelToRem(14)};
    font-weight: 700;
    text-transform: uppercase;

    :hover,
    :focus {
      border-color: ${({ theme }) => theme.colors['yellow-800']};
    }
  }
`;

export const OrderAddressContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    div {
      display: flex;
      gap: 12px;
    }
  }
`;

export const PaymentContainer = styled.div`
  margin-top: 12px;
  > div {
    > div:last-child {
      display: flex;
      gap: 12px;
    }
  }
`;

export const SelectedCoffeesContainer = styled.div`
  width: 40%;
`;

export const ContainerHeader = styled.div`
  display: flex;
  gap: 8px;

  h3 {
    font-size: ${convertPixelToRem(16)};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.subtitle};
  }

  span {
    font-size: ${convertPixelToRem(14)};
    color: ${({ theme }) => theme.colors['gray-500']};
  }
`;

interface InputProps {
  $width?: number;
}

export const Input = styled.input<InputProps>`
  padding: 12px;
  border-radius: 4px;
  outline: 0;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors['gray-150']};
  color: ${({ theme }) => theme.colors['gray-500']};

  ::placeholder {
    color: ${({ theme }) => theme.colors['gray-250']};
  }

  ${({ $width }) =>
    $width
      ? css`
          width: ${convertPixelToRem($width)};
        `
      : css`
          width: 100%;
        `}

  :focus {
    border-color: ${({ theme }) => theme.colors['purple-500']};
  }
`;

interface PaymentMethodButtonProps {
  $active?: boolean;
}

export const PaymentMethodButton = styled.button<PaymentMethodButtonProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['gray-200']};
  flex: 1;
  outline: 0;
  border: 1px solid transparent;

  span {
    font-size: ${convertPixelToRem(12)};
    text-transform: uppercase;
    white-space: nowrap;

    ${({ $active }) =>
      $active
        ? css`
            color: ${({ theme }) => theme.colors['purple-500']};
          `
        : css`
            color: ${({ theme }) => theme.colors['gray-500']};
          `}
  }

  :hover,
  :focus {
    border-color: ${({ theme }) => theme.colors['purple-500']};
  }
`;

export const CoffeeContainer = styled.div`
  display: flex;

  img {
    ${getBoxWidthAndHeight(64)}
    margin-right: 20px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 50px;

    > div {
      display: flex;
      gap: 8px;

      > button {
        ${flex.middle}
        gap: 4px;
        border-radius: 6px;
        padding: 8px;
        border: 1px solid transparent;
        background: ${({ theme }) => theme.colors['gray-200']};
        font-size: ${convertPixelToRem(12)};
        color: ${({ theme }) => theme.colors['gray-500']};
        text-transform: uppercase;
        outline: 0;

        :hover,
        :focus {
          border-color: ${({ theme }) => theme.colors['purple-500']};
          color: ${({ theme }) => theme.colors['purple-500']};
        }
      }
    }
  }

  > span {
    font-size: ${convertPixelToRem(16)};
    font-weight: 700;
    color: ${({ theme }) => theme.colors['gray-500']};
  }
`;

export const Divider = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: ${convertPixelToRem(14)};
  color: ${({ theme }) => theme.colors['gray-500']};

  div {
    display: flex;
    justify-content: space-between;

    h4 {
      font-size: ${convertPixelToRem(16)};
      font-weight: 400;
    }

    strong {
      font-size: ${convertPixelToRem(20)};
    }
  }
`;

export const ConfirmButton = styled.button`
  border-radius: 6px;
  padding: ${convertPixelToRem(12)} ${convertPixelToRem(8)};
  text-transform: uppercase;
`;
