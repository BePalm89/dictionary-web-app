import styled from "styled-components";

const  ErrorFallback = ({ error, resetErrorBoundary })  => {
    return (
      <ErrorContainer role="alert">
        <ErrorText>Something went wrong:</ErrorText>
        <ErrorMessage>{error.message}</ErrorMessage>
        <ErrorButton onClick={resetErrorBoundary}>Try again</ErrorButton>
      </ErrorContainer>
    );
}

const ErrorContainer = styled.div``;

const ErrorText = styled.p``;

const ErrorMessage = styled.pre``;

const ErrorButton = styled.button``;

export default ErrorFallback;