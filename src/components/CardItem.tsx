import { useState } from 'react';
import { ProductsType } from '../redux/services-redux/Poducts/types';
import { CardItemStyle } from './styles/CardItemStyle';
import { IconCartX } from '../components/styles/CardItemStyle';

interface DataProps {
  data: ProductsType;
  setTotalPriceItems: (value: number) => void;
  totalPriceItems: number;
  id: string;
  removeCard: (id: string) => void;
  counterItem: number,
  setCounterItem: (counter: number) => void;
}

export const CardItem: React.FC<DataProps> = ({
  data,
  setTotalPriceItems,
  totalPriceItems,
  id,
  removeCard,
  counterItem,
  setCounterItem,
}) => {

  const[counter, setCounter] = useState<number>(1)

  const newObjectData = {
    ...data,
    id: id,
  };

  function incrementCounter(): void {
    setTotalPriceItems(totalPriceItems + Number(newObjectData.price));
    setCounter(counter + 1);
    setCounterItem(counterItem + 1)
  }

  function decrementCounter(): void {
    if (counter > 1) {
      setCounter(counter - 1);
      setCounterItem(counterItem - 1)
      setTotalPriceItems(totalPriceItems - Number(newObjectData.price));
    }
  }

  return (
    <CardItemStyle>
      <div>
        <section>
          <img src={newObjectData.photo} alt={newObjectData.name} />
        </section>
        <section>
          <p className="name_product">{newObjectData.name}</p>
        </section>
        <section>
          <button type="button" data-testid="decrement" onClick={decrementCounter}>
            -
          </button>
          <p>{counter}</p>
          <button type="button" data-testid="increment" onClick={incrementCounter}>
            +
          </button>
        </section>
        <section>
          <p data-testid={`price-${Number(newObjectData.price) * counter}`}>
            {(Number(newObjectData.price) * counter).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </section>
        <p className="iconX">
          <IconCartX data-testid="remove-card" onClick={() => {
            removeCard(newObjectData.id);
            setCounterItem(counterItem - 1)
          }
        } />
        </p>
      </div>
    </CardItemStyle>
  );
};
