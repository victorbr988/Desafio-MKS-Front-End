import styled from 'styled-components';

export const Container = styled.div`
  > div {
    height: 22rem;

    .bg-skeleton {
      width: 15.2rem;
    }
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 22rem ;
    }

    .image-item-skeleton {
      margin-top: 2rem;
      z-index: 1;
      width: 8rem;
      height: 8rem;
    }
    .row-skeleton {
      display: flex;
      height: 12px;

      &:nth-child(2) {
        width: 60%;
        margin-top: 2rem;
      }
      &:nth-child(3) {
        width: 50%;
        margin-top: 10px;
      }
    }
  }
`;