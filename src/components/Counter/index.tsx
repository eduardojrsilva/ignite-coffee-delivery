import { Container } from './styles';

interface CounterProps {
  amount: number;
  coffeeId: string;
  handleMinusClick: (coffeeId: string) => void;
  handlePlusClick: (coffeeId: string) => void;
}

const Counter: React.FC<CounterProps> = ({
  amount,
  coffeeId,
  handleMinusClick,
  handlePlusClick,
}) => {
  return (
    <Container>
      <button type="button" onClick={() => handleMinusClick(coffeeId)}>
        −
      </button>
      <span>{amount}</span>
      <button type="button" onClick={() => handlePlusClick(coffeeId)}>
        +
      </button>
    </Container>
  );
};

export default Counter;
