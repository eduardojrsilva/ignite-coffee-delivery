import styled from 'styled-components';
import { convertPixelToRem, flex, getBoxWidthAndHeight } from 'css-blocks-styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: ${convertPixelToRem(50)};
`;

export const Content = styled.div`
  > h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: ${convertPixelToRem(32)};
    color: ${({ theme }) => theme.colors['yellow-800']};
  }

  > span {
    font-size: ${convertPixelToRem(20)};
    color: ${({ theme }) => theme.colors.subtitle};
  }
`;

export const OrderInfoContainer = styled.div`
  margin-top: 40px;

  border: double 1px transparent;
  border-radius: 6px 36px;
  background-image: ${({ theme }) => theme.gradients.border};
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const OrderInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  color: ${({ theme }) => theme.colors['gray-500']};

  > div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: ${convertPixelToRem(16)};
    }
  }
`;

interface IconProps {
  $color: string;
}

export const Icon = styled.div<IconProps>`
  ${flex.middle}
  ${getBoxWidthAndHeight(35)}
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
`;
