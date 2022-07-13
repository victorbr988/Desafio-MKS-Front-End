import { useState } from 'react';
import { IconX } from '../components/styles/CartItemsStyle';
import { CartItemsStyle } from '../components/styles/CartItemsStyle';
import { ProductsType } from '../redux/services-redux/Poducts/types';
import { CardItem } from './CardItem';

interface PropsState {
  setIsOpenMenu: (status: boolean) => void;
  allItems: ProductsType[];
  totalPriceItems: number
  setTotalPriceItems: (value: number) => void;
  setAllItems: (item: ProductsType[]) => void;
}

export const CartItems: React.FC<PropsState> = ({
  setIsOpenMenu,
  allItems,
  totalPriceItems,
  setTotalPriceItems,
  setAllItems
}) => {
  const [counterItem, setCounterItem] = useState<number>(1);

  function removeCard(id:string): void {
    const filteredCards = allItems.filter((_item, index ) => index !== Number(id))
    setAllItems(filteredCards)
    console.log(counterItem)
    setTotalPriceItems(filteredCards.reduce((prev,curr) => prev + (Number(curr.price) * counterItem), 0))
  }
  
  return (
    <CartItemsStyle>
      <div className="content_sidebar">
        <header className="card_header">
          <h2>
            Carrinho <span>de Compras</span>
          </h2>
          <p>
            <IconX data-testid="close-modal" onClick={() => setIsOpenMenu(false)} />
          </p>
        </header>

        <main>
          {allItems.map((item, index) => (
            <CardItem
              key={index}
              id={`${index}`}
              counterItem={counterItem}
              setCounterItem={setCounterItem}
              removeCard={removeCard}
              data={item}
              setTotalPriceItems={setTotalPriceItems}
              totalPriceItems={totalPriceItems}
            />
          ))}
        </main>

        <footer>
          <section>
            <h2>Total:</h2>
            <p>{totalPriceItems.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
          </section>
          <button type="button" onClick={() => setIsOpenMenu(false)}>
            Finalizar compra
          </button>
        </footer>
      </div>
    </CartItemsStyle>
  );
};
