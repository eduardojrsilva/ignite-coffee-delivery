import React, { useState } from 'react';
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from 'phosphor-react';

import PageWrapper from '../../components/PageWrapper';
import Counter from '../../components/Counter';

import { Item, useCart } from '../../providers/Cart';

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

const DELIVERY_PRICE = 3.5;

type PaymentMethod = 'CREDIT_CARD' | 'DEBIT_CARD' | 'MONEY';

const Order: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('CREDIT_CARD');
  const { items, addItem, removeItem } = useCart();

  const totalItemsPrice = items.reduce((acc, item) => {
    return acc + item.coffee.price * item.amount;
  }, 0);

  const totalPrice = totalItemsPrice + DELIVERY_PRICE;

  const handleCounterClick = ({ coffee, amount }: Item, type: 'add' | 'remove'): void => {
    const amountToSend = type === 'add' ? amount + 1 : amount - 1;

    addItem(coffee, amountToSend);
  };

  const handlePaymentClick = (method: PaymentMethod): void => {
    setPaymentMethod(method);
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
                <PaymentMethodButton
                  onClick={() => handlePaymentClick('CREDIT_CARD')}
                  $active={paymentMethod === 'CREDIT_CARD'}
                >
                  <CreditCard color={theme.colors['purple-500']} />
                  <span>Cartão de Crédito</span>
                </PaymentMethodButton>

                <PaymentMethodButton
                  onClick={() => handlePaymentClick('DEBIT_CARD')}
                  $active={paymentMethod === 'DEBIT_CARD'}
                >
                  <Bank color={theme.colors['purple-500']} />
                  <span>Cartão de Débito</span>
                </PaymentMethodButton>

                <PaymentMethodButton
                  onClick={() => handlePaymentClick('MONEY')}
                  $active={paymentMethod === 'MONEY'}
                >
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
            {items.map((item) => (
              <React.Fragment key={item.id}>
                <CoffeeContainer>
                  <img src={item.coffee.image} alt="" />

                  <div>
                    <span>{item.coffee.name}</span>

                    <div>
                      <Counter
                        amount={item.amount}
                        coffeeId={item.coffee.id}
                        handleMinusClick={() => handleCounterClick(item, 'remove')}
                        handlePlusClick={() => handleCounterClick(item, 'add')}
                      />

                      <button type="button" onClick={() => removeItem(item.coffee.id)}>
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
                    }).format(item.coffee.price * item.amount)}
                  </span>
                </CoffeeContainer>

                <Divider />
              </React.Fragment>
            ))}

            <PriceContainer>
              <div>
                <span>Total de itens</span>
                <h4>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    currencyDisplay: 'symbol',
                  }).format(totalItemsPrice)}
                </h4>
              </div>

              <div>
                <span>Entrega</span>
                <h4>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    currencyDisplay: 'symbol',
                  }).format(DELIVERY_PRICE)}
                </h4>
              </div>

              <div>
                <strong>Total</strong>
                <strong>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    currencyDisplay: 'symbol',
                  }).format(totalPrice)}
                </strong>
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
