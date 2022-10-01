import styled from "@emotion/styled";

export default () => <Spinner />;

const Spinner = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 0.3rem solid;
  border-color: #dbdcef;
  border-right-color: #000000;
  animation: spin 1s infinite linear;

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
`;
