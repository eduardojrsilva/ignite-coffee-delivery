import { MapPin, ShoppingCart } from 'phosphor-react';

import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import Intro from '../Intro';

import { Header, Wrapper } from './styles';

interface PageWrapperProps {
  children: React.ReactNode;
  hasIntro?: boolean;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, hasIntro = false }) => {
  return (
    <>
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

      {hasIntro && <Intro />}

      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default PageWrapper;
