import styled from "styled-components";

export default styled.div`
background-color: #919494;
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #f8f8f8 50%,
    #e7edf1 100%,
  );
  background-size: 400% 400%;
  animation: shimmer 2.1s ease-in-out infinite;

  @keyframes shimmer {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
`