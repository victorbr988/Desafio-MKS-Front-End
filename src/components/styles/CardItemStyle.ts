import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

export const CardItemStyle = styled.div`
  display: flex;

  div {
    padding: 0.5rem;
    display: flex;
    width: 100%;
    margin: 0.5rem;
    border-radius: 1rem;
    background-color: white;
    justify-content: space-between;

    @media (max-width: 320px) {
      width: 100%;
      margin: 0 2rem 2rem 2rem ;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      gap: 1rem;
      

      &:nth-child(2) {
        background-color: red;
      }
      .new-icon {
        display: flex;
        font-size: 1.5rem ;
      }
      section.iconNew {
        width: 100%;
        justify-content: end;
      }
      p.name_product {
        width: 100%;
      }
      .iconX {
        display: none;
      }
    }
  }
  p.price {
        background-color: black;
        color: white;
        padding: .5rem;
        border-radius: .5rem;
      }
  div img {
    width: 6rem;
  }
  section {
    display: flex;
    align-items: center;
  }
  section .name_product {
    width: 50px;
  }
  button {
    margin: 0 0.5rem;
    height: 20px;
    width: 20px;
  }
  .iconX {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    border-radius: 50%;
    width: 18px;
    height: 18px;
  }
`;

export const IconCartX = styled(FiX)`
  color: white;
  cursor: pointer;
`;

export const NewIconX = styled(FiX)`
  color: black;
  display: none;
`;
