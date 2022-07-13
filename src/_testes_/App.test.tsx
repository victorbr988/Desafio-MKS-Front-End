import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../redux/store';
import userEvent from '@testing-library/user-event';

test('testa se a página possui um header com um titulo', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const title = screen.getByText('MKS');
  const subTitle = screen.getByText('Sistemas');

  expect(title).toBeInTheDocument();
  expect(subTitle).toBeInTheDocument();
});

test('testa se a página possui um header com um botão que abre o carrinho de compras', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const button = screen.getByRole('button', { name: '0' });

  expect(button).toBeInTheDocument();

  userEvent.click(button);

  const title = screen.getByRole('heading', { name: 'Carrinho de Compras', level: 2 });
  expect(title).toBeInTheDocument();

  const totalText = screen.getByRole('heading', { name: 'Total:', level: 2 });
  expect(totalText).toBeInTheDocument();

  const priceInitial = screen.getByText('R$ 0,00');
  expect(priceInitial).toBeInTheDocument();

  const buttonFinished = screen.getByRole('button', { name: 'Finalizar compra' });
  expect(buttonFinished).toBeInTheDocument();
});

test('testa se ao clicar no botão de fechar o menu, o menu é fechado', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const buttonOpenModal = screen.getByRole('button', { name: '0' });
  expect(buttonOpenModal).toBeInTheDocument();

  userEvent.click(buttonOpenModal);

  const buttonCloseModal = screen.getByTestId('close-modal');
  expect(buttonCloseModal).toBeInTheDocument();

  userEvent.click(buttonCloseModal);

  expect(buttonCloseModal).not.toBeInTheDocument();
});

test('testa se ao menos um item da loja é renderizados na tela', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const cardTitle = await screen.findByText('Headset Cloud Stinger');
  expect(cardTitle).toBeInTheDocument();

  const imageProduct = await screen.findByRole('img', { name: 'Headset Cloud Stinger' });
  expect(imageProduct).toBeInTheDocument();
  expect(imageProduct).toHaveAttribute(
    'src',
    'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp'
  );

  const priceProduct = await screen.findByText('R$ 600,00');
  expect(priceProduct).toBeInTheDocument();

  const descriptionProduct = await screen.findByText(
    'O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.'
  );
  expect(descriptionProduct).toBeInTheDocument();

  const buttonBuyItem = await screen.findAllByTestId('add-item');
  expect(buttonBuyItem.length).toBe(8);
  
});

test('testa se ao clicar para comprar um item, ele é adicionado ao carrinho', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const buttonBuyItem = await screen.findAllByTestId('add-item');
  userEvent.click(buttonBuyItem[0])

  const button = screen.getByRole('button', { name: '1' });
  expect(button).toBeInTheDocument();
});

test('testa se depois de adicionar o item ao carrinho, é possível aumentar sua quantidade', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const buttonBuyItem = await screen.findAllByTestId('add-item');
  userEvent.click(buttonBuyItem[0])

  const buttonCartItems = screen.getByRole('button', { name: '1' });
  expect(buttonCartItems).toBeInTheDocument();

  userEvent.click(buttonCartItems);

  const buttonRemoveItemCart = screen.getByTestId('remove-card');
  expect(buttonRemoveItemCart).toBeInTheDocument();

  const buttonIncrement = screen.getByTestId('increment')
  expect(buttonIncrement).toBeInTheDocument();

  userEvent.click(buttonIncrement)

  const priceUpdate = screen.getByTestId('price-1200')
  console.log(priceUpdate)
  expect(priceUpdate).toBeInTheDocument();

  const buttonDecrement = screen.getByTestId('decrement')
  expect(buttonDecrement).toBeInTheDocument();

  userEvent.click(buttonDecrement)

  const priceUpdateDecrement = screen.getByTestId('price-600')
  console.log(priceUpdateDecrement)
  expect(priceUpdateDecrement).toBeInTheDocument();

});
