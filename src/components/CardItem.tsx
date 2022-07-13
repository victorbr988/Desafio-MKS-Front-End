import { useState } from 'react';
import { ProductsType } from '../redux/services-redux/Poducts/types';
import { CardItemStyle, NewIconX } from './styles/CardItemStyle';
import { IconCartX } from '../components/styles/CardItemStyle';

interface DataProps {
  data: ProductsType;
  setTotalPriceItems: (value: number) => void;
  totalPriceItems: number;
  removeCard: (id: number) => void;
}

export const CardItem: React.FC<DataProps> = ({
  data,
  setTotalPriceItems,
  totalPriceItems,
  removeCard,
}) => {

  const[counter, setCounter] = useState<number>(1)

  function incrementCounter(): void {
    setTotalPriceItems(totalPriceItems + Number(data.price));
    setCounter(counter + 1);
  }

  function decrementCounter(): void {
    if (counter > 1) {
      setCounter(counter - 1);
      setTotalPriceItems(totalPriceItems - Number(data.price));
    }
  }

  return (
    <CardItemStyle>
      <div>
        <section className='iconNew'>
          <NewIconX className='new-icon' onClick={() => {
              removeCard(data.id);
            }
              
          }/>
        </section>
        <section>
          <img src={data.photo} alt={data.name} />
          
        </section>
        
        <section>
          <p className="name_product">{data.name}</p>
        </section>
        <section>
          <button type="button" data-testid="decrement" onClick={decrementCounter}>
            -
          </button>
          <p>{counter}</p>
          <button type="button" data-testid="increment" onClick={incrementCounter}>
            +
          </button>
          <section>
          <p className='price' data-testid={`price-${Number(data.price) * counter}`}>
            {(Number(data.price) * (counter)).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </section>
        </section>
        
        <p className="iconX" onClick={() => {
            removeCard(data.id);
            }
          }>
          <IconCartX data-testid="remove-card" />
        </p>
      </div>
    </CardItemStyle>
  );
};
