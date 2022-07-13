import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

export const CartItemsStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: #0F52BA;
  height: 100%;
  width: 90%;
  box-shadow: 0px 10px 15px 3px rgba(0,0,0,0.3);

  .content_sidebar {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    main {
      overflow-y: scroll ;
    }

    footer button {
      background-color: black;
      padding: 1rem;
      width: 100%;
      color: white;
      font-size: 1.5rem;
      border: transparent ;
      cursor: pointer;
    }

    footer section {
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: white;
      height: 4rem;
      font-size: 1rem;

      p {
        font-weight: bold;
        font-size: 1.3rem;
      }
    }
  }
  
  .card_header {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    padding: 2rem 2rem;

    h2 {
      display: flex;
      flex-direction: column;
      color: white;
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: black;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      cursor: pointer;
    }

  }
  @media (min-width: 650px) {
    width: 28rem;
  }
`
export const IconX = styled(FiX) `
  text-align: center;
  width: 1.5rem;
  color: white;
  font-size: 1.3rem;
`