import { ProductsType } from '../redux/services-redux/Poducts/types';
import { FiShoppingBag } from 'react-icons/fi';
import { CardProducStyle } from '../components/styles/CardProductStyle';

interface ProducsPropTypes {
  products: ProductsType;
  setAllItems: (item: ProductsType[]) => void;
  allItems: ProductsType[];
  setTotalPriceItems: (value: number) => void;
  totalPriceItems: number;
}
export const CardProducts: React.FC<ProducsPropTypes> = ({
  products,
  allItems,
  setAllItems,
  setTotalPriceItems,
  totalPriceItems,
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
          setAllItems([...allItems, { ...products }]);
          setTotalPriceItems(totalPriceItems + Number(products.price))
        }}
      >
        <FiShoppingBag />
        Comprar
      </button>
    </CardProducStyle>
  );
};
