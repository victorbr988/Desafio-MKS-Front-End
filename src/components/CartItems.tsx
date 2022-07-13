import { useState, useEffect } from 'react';
import { IconX } from '../components/styles/CartItemsStyle';
import { CartItemsStyle } from '../components/styles/CartItemsStyle';
import { ProductsType } from '../redux/services-redux/Poducts/types';
import { CardItem } from './CardItem';

interface PropsState {
  setIsOpenMenu: (status: boolean) => void;
  allItems: ProductsType[];
  setAllItems: (item: ProductsType[]) => void;
  couterClickItem: number;
  setCounterClickItem: (counter: number) => void
}

export const CartItems: React.FC<PropsState> = ({
  setIsOpenMenu,
  allItems,
  setAllItems,
}) => {
  const [totalPriceItems, setTotalPriceItems] = useState<number>(0)

  function removeCard(id: number): void {
    const filteredCards = allItems.filter((item) => item.id !== id)
    setAllItems(filteredCards)
  }

  useEffect(() => {
    const total = allItems.reduce((prev,curr) => prev + Number(curr.price), 0)
    setTotalPriceItems(total)
  }, [allItems, setTotalPriceItems,])
  
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
          {allItems.map((item) => (
            <CardItem
              key={item.id}
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
