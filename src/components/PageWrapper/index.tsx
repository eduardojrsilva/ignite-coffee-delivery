import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';

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
        <Link to="/">
          <LogoIcon />
        </Link>

        <div>
          <span>
            <MapPin size={22} weight="fill" />
            Belo Horizonte, MG
          </span>

          <Link to="/order">
            <ShoppingCart size={22} weight="fill" />
          </Link>
        </div>
      </Header>

      {hasIntro && <Intro />}

      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default PageWrapper;
