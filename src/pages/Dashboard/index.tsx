import { useState } from 'react';
import { ShoppingCart } from 'phosphor-react';

import PageWrapper from '../../components/PageWrapper';
import Counter from '../../components/Counter';

import { useCart } from '../../providers/Cart';
import { useToast } from '../../providers/Toast';

import { Coffee, COFFEES } from '../../models/coffee';

import { BuyContainer, Categories, CoffeCardContainer, CoffeesContainer, Title } from './styles';

interface CoffeeAmount {
  [key: string]: number;
}

const Dashboard: React.FC = () => {
  const { items, addItem } = useCart();
  const { addToast } = useToast();

  const [amount, setAmount] = useState<CoffeeAmount>(
    COFFEES.reduce((acc, { id }) => {
      const amountCoffee = items.find(({ coffee }) => coffee.id === id)?.amount || 0;

      return { ...acc, [id]: amountCoffee };
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

  const handleAddItem = (coffee: Coffee): void => {
    const amountCoffee = amount[coffee.id];

    addItem(coffee, amountCoffee);

    if (amountCoffee) {
      const sufix = amountCoffee > 1 ? 'Foram adicionados' : 'Foi adicionado';

      addToast({
        title: 'Sucesso',
        description: `${sufix} ${amountCoffee} ${coffee.name} ao seu carrinho!`,
        type: 'success',
      });
    } else {
      addToast({
        title: 'Sucesso',
        description: `${coffee.name} foi removido do seu carrinho!`,
        type: 'success',
      });
    }
  };

  return (
    <PageWrapper hasIntro>
      <Title>Nossos cafés</Title>

      <CoffeesContainer>
        {COFFEES.map((coffee) => (
          <CoffeCardContainer key={coffee.id}>
            <img src={coffee.image} alt="" />

            <Categories>
              {coffee.categories.map((category) => (
                <span key={`${coffee.id} - ${category}`}>{category}</span>
              ))}
            </Categories>

            <h2>{coffee.name}</h2>

            <span>{coffee.description}</span>

            <BuyContainer>
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  currencyDisplay: 'symbol',
                }).format(coffee.price)}
              </span>

              <Counter
                amount={amount[coffee.id]}
                coffeeId={coffee.id}
                handleMinusClick={handleMinusClick}
                handlePlusClick={handlePlusClick}
              />

              <button type="button" onClick={() => handleAddItem(coffee)}>
                <ShoppingCart size={22} color="white" />
              </button>
            </BuyContainer>
          </CoffeCardContainer>
        ))}
      </CoffeesContainer>
    </PageWrapper>
  );
};

export default Dashboard;
