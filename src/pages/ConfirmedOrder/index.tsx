import { CurrencyDollarSimple, MapPin, Timer } from 'phosphor-react';

import PageWrapper from '../../components/PageWrapper';

import { ReactComponent as ConfirmedOrderIcon } from '../../assets/confirmed-order.svg';

import { theme } from '../../styles/theme';
import { Container, Content, Icon, InfoItem, OrderInfoContainer, OrderInfoContent } from './styles';

const ConfirmedOrder: React.FC = () => {
  return (
    <PageWrapper>
      <Container>
        <Content>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>

          <OrderInfoContainer>
            <OrderInfoContent>
              <InfoItem>
                <Icon $color={theme.colors['purple-500']}>
                  <MapPin size={16} color="white" weight="fill" />
                </Icon>

                <div>
                  <span>
                    Entrega em <strong>Rua Paulo Piedade Campos, 457</strong>
                  </span>
                  <span>Estoril - Belo Horizonte, MG</span>
                </div>
              </InfoItem>

              <InfoItem>
                <Icon $color={theme.colors['yellow-500']}>
                  <Timer size={16} color="white" weight="fill" />
                </Icon>

                <div>
                  <span>Previsão de entrega</span>
                  <strong>20 min - 30 min</strong>
                </div>
              </InfoItem>

              <InfoItem>
                <Icon $color={theme.colors['yellow-800']}>
                  <CurrencyDollarSimple size={16} color="white" weight="fill" />
                </Icon>

                <div>
                  <span>Pagamento na entrega</span>
                  <strong>Cartão de Crédito</strong>
                </div>
              </InfoItem>
            </OrderInfoContent>
          </OrderInfoContainer>
        </Content>

        <ConfirmedOrderIcon />
      </Container>
    </PageWrapper>
  );
};

export default ConfirmedOrder;
