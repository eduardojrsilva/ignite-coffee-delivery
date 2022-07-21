import { MapPin, ShoppingCart } from 'phosphor-react';

import { ReactComponent as LogoIcon } from '../../assets/logo.svg';

import { Header, Wrapper } from './styles';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <LogoIcon />

        <div>
          <span>
            <MapPin size={22} weight="fill" />
            Belo Horizonte, MG
          </span>

          <button type="button">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </Header>

      {children}
    </Wrapper>
  );
};

export default PageWrapper;
