import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';

import { ReactComponent as CoffeeIcon } from '../../assets/coffee.svg';

import { IntroContainer, Items, Item, Title, Wrapper } from './styles';
import { theme } from '../../styles/theme';

const Intro: React.FC = () => {
  return (
    <IntroContainer>
      <Wrapper>
        <div>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
          </Title>

          <Items>
            <Item $background={theme.colors['yellow-800']}>
              <div>
                <ShoppingCart color="white" />
              </div>
              <span>Compra simples e segura</span>
            </Item>

            <Item $background={theme.colors['yellow-500']}>
              <div>
                <Package color="white" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </Item>

            <Item $background={theme.colors['gray-500']}>
              <div>
                <Timer color="white" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </Item>

            <Item $background={theme.colors['purple-500']}>
              <div>
                <Coffee color="white" />
              </div>
              <span>O café chega fresquinho até você</span>
            </Item>
          </Items>
        </div>

        <CoffeeIcon />
      </Wrapper>
    </IntroContainer>
  );
};

export default Intro;
