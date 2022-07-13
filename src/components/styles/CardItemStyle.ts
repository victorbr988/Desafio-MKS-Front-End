import styled from "styled-components";
import { FiX } from 'react-icons/fi';

export const CardItemStyle = styled.div`
  display: flex;
 
  div {
    padding: .5rem;
    display: flex;
    width: 100%;
    margin: .5rem;
    border-radius: 1rem;
    background-color: white;
    justify-content: space-between;
  }
  div img {
    width: 4rem;
  }
  section {
    display: flex;
    align-items: center;
  }
  section .name_product {
    width: 50px;
  }
  button {
    margin: 0 .5rem;
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
`

export const IconCartX = styled(FiX) `
  color: white;
  cursor: pointer;
`