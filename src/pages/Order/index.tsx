import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../../components/Counter';

import PageWrapper from '../../components/PageWrapper';
import { COFFEES } from '../../models/coffee';

import { theme } from '../../styles/theme';

import {
  Card,
  CoffeeContainer,
  ConfirmButton,
  Container,
  ContainerHeader,
  Divider,
  Input,
  OrderAddressContainer,
  PaymentContainer,
  PaymentMethodButton,
  PriceContainer,
  SelectedCoffeesContainer,
} from './styles';

interface CoffeeAmount {
  [key: string]: number;
}

const Order: React.FC = () => {
  const [amount, setAmount] = useState<CoffeeAmount>(
    COFFEES.reduce((acc, { id }) => {
      return { ...acc, [id]: 0 };
    }, {}),
  );

  const handleMinusClick = (coffeeId: string): void => {
    if (amount[coffeeId] > 0) {
      setAmount({ ...amount, [coffeeId]: (amount[coffeeId] -= 1) });
    }
  };

  const handlePlusClick = (coffeeId: string): void => {
    setAmount({ ...amount, [coffeeId]: (amount[coffeeId] += 1) });
  };

  return (
    <PageWrapper>
      <Container>
        <div>
          <OrderAddressContainer>
            <h2>Complete seu pedido</h2>

            <Card>
              <ContainerHeader>
                <MapPinLine size={22} color={theme.colors['yellow-800']} />

                <div>
                  <h3>Endereço de Entrega</h3>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </ContainerHeader>

              <form>
                <Input type="text" placeholder="CEP" $width={200} />
                <Input type="text" placeholder="Rua" />

                <div>
                  <Input type="text" placeholder="Número" $width={200} />
                  <Input type="text" placeholder="Complemento" />
                </div>

                <div>
                  <Input type="text" placeholder="Bairro" $width={200} />
                  <Input type="text" placeholder="Cidade" />
                  <Input type="text" placeholder="UF" $width={60} />
                </div>
              </form>
            </Card>
          </OrderAddressContainer>

          <PaymentContainer>
            <Card>
              <ContainerHeader>
                <CurrencyDollar size={22} color={theme.colors['purple-500']} />

                <div>
                  <h3>Pagamento</h3>
                  <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                </div>
              </ContainerHeader>

              <div>
                <PaymentMethodButton $active>
                  <CreditCard color={theme.colors['purple-500']} />
                  <span>Cartão de Crédito</span>
                </PaymentMethodButton>

                <PaymentMethodButton>
                  <Bank color={theme.colors['purple-500']} />
                  <span>Cartão de Débito</span>
                </PaymentMethodButton>

                <PaymentMethodButton>
                  <Money color={theme.colors['purple-500']} />
                  <span>Dinheiro</span>
                </PaymentMethodButton>
              </div>
            </Card>
          </PaymentContainer>
        </div>

        <SelectedCoffeesContainer>
          <h2>Cafés selecionados</h2>

          <Card>
            <CoffeeContainer>
              <img src={COFFEES[0].image} alt="" />

              <div>
                <span>{COFFEES[0].name}</span>

                <div>
                  <Counter
                    amount={amount[COFFEES[0].id]}
                    coffeeId={COFFEES[0].id}
                    handleMinusClick={handleMinusClick}
                    handlePlusClick={handlePlusClick}
                  />

                  <button type="button">
                    <Trash size={16} color={theme.colors['purple-500']} />
                    Remover
                  </button>
                </div>
              </div>

              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  currencyDisplay: 'symbol',
                }).format(COFFEES[0].price)}
              </span>
            </CoffeeContainer>

            <Divider />

            <PriceContainer>
              <div>
                <span>Total de itens</span>
                <h4>R$ 29,70</h4>
              </div>

              <div>
                <span>Entrega</span>
                <h4>R$ 3,50</h4>
              </div>

              <div>
                <strong>Total</strong>
                <strong>R$ 33,20</strong>
              </div>
            </PriceContainer>

            <ConfirmButton to="/confirmed-order">Confirmar Pedido</ConfirmButton>
          </Card>
        </SelectedCoffeesContainer>
      </Container>
    </PageWrapper>
  );
};

export default Order;
