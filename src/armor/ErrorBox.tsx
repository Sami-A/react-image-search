import styled from "@emotion/styled";

const ErrorBox = ({
  message = "Unknown error has occurred",
}: {
  message?: string;
}) => (
  <ErrorContainer>
    <span>{message}</span>
  </ErrorContainer>
);

const ErrorContainer = styled.div`
  padding: 0.5rem 1rem;
  background-color: #ffd7d7;
  border-radius: 0.3rem;
  box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px rgba(60, 64, 67, 0.15);
  span {
    color: #bf2e2e;
  }
`;

export default ErrorBox;
