import styled from 'styled-components';

export const CardProducStyle = styled.section`
  display: flex;
  flex-direction: column;
  width: 15.6rem;
  height: 22rem;
  background-color: white;
  margin: 1rem;
  border-radius: .5rem;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    height: 8rem;
  }
  section img {
    width: 7rem;
  }
  .name-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #2C2C2C;
    font-family: sans-serif;
    font-size: 1rem;
    height: 4rem;
  }
  .name-price h2 {
    font-size: 1.3rem;
  }
  h3 {
    background-color: #373737;
    padding: .5rem;
    margin: .5rem;
    border-radius: .3rem;
    color: white;
    font-size: 1rem;
  }
  button {
    display: flex;
    justify-content: center;
    gap: 1rem;
    font-size: 1.1rem;
    padding: .8rem;
    border-radius:  0 0 0.5rem 0.5rem;
    border: transparent;
    background-color: #0F52BA;
    color: white;
    cursor: pointer;
  } 
 
`