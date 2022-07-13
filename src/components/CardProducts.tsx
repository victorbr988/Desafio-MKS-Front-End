import { ProductsType } from '../redux/services-redux/Poducts/types';
import { FiShoppingBag } from 'react-icons/fi';
import { CardProducStyle } from '../components/styles/CardProductStyle';
import toast from 'react-hot-toast';

interface ProducsPropTypes {
  products: ProductsType;
  setAllItems: (item: ProductsType[]) => void;
  allItems: ProductsType[];
  setCounterClickItem: (counter: number) => void;
  couterClickItem: number
}
export const CardProducts: React.FC<ProducsPropTypes> = ({
  products,
  allItems,
  setAllItems,
  setCounterClickItem,
  couterClickItem,
}) => {

  return (
    <CardProducStyle id={`${products.id}`}>
      <section>
        <img src={products.photo} alt={products.name} />
      </section>

      <section className="name-price">
        <h2>{products.name}</h2>
        <h3>
          {Number(products.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </h3>
      </section>

      <section>
        <p>{products.description}</p>
      </section>

      <button
        type="button"
        data-testid="add-item"
        onClick={() => {
         if (allItems.length < 0 || allItems.includes(products) === false) {
          setAllItems([...allItems, products])
          return setCounterClickItem(couterClickItem + 1)
         }
         toast.error('Para adiconar mais quantidades entre no carrinho')
        }}
      >
        <FiShoppingBag />
        Comprar
      </button>
    </CardProducStyle>
  );
};
