import { Link } from 'react-router-dom';
import { MapPin, ShoppingCart } from 'phosphor-react';

import { useCart } from '../../providers/Cart';

import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import Intro from '../Intro';

import { CartButton, Header, Wrapper } from './styles';

interface PageWrapperProps {
  children: React.ReactNode;
  hasIntro?: boolean;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, hasIntro = false }) => {
  const { items } = useCart();

  return (
    <>
      <Header>
        <Link to="/">
          <LogoIcon />
        </Link>

        <div>
          <span>
            <MapPin size={22} weight="fill" />
            Belo Horizonte, MG
          </span>

          <CartButton to="/order" $amountItems={items.length}>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </div>
      </Header>

      {hasIntro && <Intro />}

      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default PageWrapper;
