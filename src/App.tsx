import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AplicationState } from './redux/store';
import { CardProducts } from './components/CardProducts';
import * as actions from './redux/services-redux/Poducts/actions';
import { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { HeaderStyles } from './components/styles/HeaderStyles';
import { GroupCardsStyle } from './components/styles/GroupCardsStyle';
import { FooterStyle } from './components/styles/FooterStyle';
import { CartItems } from './components/CartItems';
import { ProductsType } from './redux/services-redux/Poducts/types';
import { LoadingPanel } from './components/LoadingPanel';

export const useApiSelector: TypedUseSelectorHook<AplicationState> = useSelector;

const App: React.FC = () => {

  const dispatch = useDispatch();
  const[openMenu, setIsOpenMenu] = useState<boolean>(false)
  const [allItems, setAllItems] = useState<ProductsType[]>([])
  const [totalPriceItems, setTotalPriceItems] = useState<number>(0)
  const products = useApiSelector(({ reducerProducts }) => reducerProducts);

  useEffect(() => {
    const { requestAPiMks } = actions;

    dispatch(requestAPiMks());
  }, [dispatch]);

  return (
    <div className="App">
      <HeaderStyles>
        <h1>
          MKS <span>Sistemas</span>
        </h1>
        <button type="button" onClick={() => setIsOpenMenu(true)}>
          <FiShoppingCart/> {allItems.length}
        </button>
      </HeaderStyles>
      <GroupCardsStyle>
        {products.loading ? <LoadingPanel /> : products.products.map((data) => (
          <CardProducts
            key={data.id}
            products={data}
            setAllItems={setAllItems}
            allItems={allItems}
            totalPriceItems={totalPriceItems}
            setTotalPriceItems={setTotalPriceItems}
          />
        ))}
      </GroupCardsStyle>

      {
        openMenu && <CartItems
          allItems={allItems}
          setAllItems={setAllItems}
          setIsOpenMenu={setIsOpenMenu}
          totalPriceItems={totalPriceItems}
          setTotalPriceItems={setTotalPriceItems}
        />
      }
      
      <FooterStyle>
        <p>MKS sistemas © Todos os direitos reservados</p>
      </FooterStyle>
    </div>
  );
};

export default App;
