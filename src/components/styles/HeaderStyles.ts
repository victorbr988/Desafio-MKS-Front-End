import styled from 'styled-components';

export const HeaderStyles = styled.header`
  background-color: #0F52BA;
  width: 100%;
  padding: 1rem 2rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2rem;
    color: white;
  }

  span {
    color: white;
    font-size: 1.5rem;
  }

  button {
    padding: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    border-radius: .3rem;
    border: transparent;
    font-size: 1rem;
    cursor: pointer;
  }
`