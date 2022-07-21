import { useState } from 'react';
import { ShoppingCart } from 'phosphor-react';

import PageWrapper from '../../components/PageWrapper';

import { COFFEES } from '../../models/coffee';

import { BuyContainer, Categories, CoffeCardContainer, CoffeesContainer, Title } from './styles';

interface CoffeeAmount {
  [key: string]: number;
}

const Dashboard: React.FC = () => {
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
    <PageWrapper hasIntro>
      <Title>Nossos cafés</Title>

      <CoffeesContainer>
        {COFFEES.map((coffee) => (
          <CoffeCardContainer key={coffee.id}>
            <img src={coffee.image} alt="" />

            <Categories>
              {coffee.categories.map((category) => (
                <span>{category}</span>
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

              <div>
                <button type="button" onClick={() => handleMinusClick(coffee.id)}>
                  −
                </button>
                <span>{amount[coffee.id]}</span>
                <button type="button" onClick={() => handlePlusClick(coffee.id)}>
                  +
                </button>
              </div>

              <button type="button">
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
