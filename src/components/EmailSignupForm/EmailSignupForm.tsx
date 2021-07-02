import { Button } from '@material-ui/core';
import { Alert, AlertTitle }  from '@material-ui/lab';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const FormWrapper = styled.div`
  display: flex;
`

const FormButton = styled(Button)`
  text-transform: capitalize !important;
`

const StyledAlert = styled(Alert)`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 888;
`

const ErrorMessage = styled.div`
  font-size: 12px;
`

interface EmailSignupFormProps {
  status: any
  message: any
  onValidated: any
}

export const EmailSignupForm = ({ status, message, onValidated }: EmailSignupFormProps ) => {
  let email: any;

  // when user submits email
  const onSubmit = () => {
    email &&
    email.value.indexOf("@") > -1 && 
    onValidated({
      EMAIL: email.value
    })
  }

  return (
    <Container>
      {status === "sending" && 
        <StyledAlert id="hello" severity="info">
          <AlertTitle>In Progress</AlertTitle>
            Sending...
        </StyledAlert>}
      {status === "error" && (
        <StyledAlert id="bye" severity="error"> 
          <AlertTitle>Error</AlertTitle>
            <ErrorMessage dangerouslySetInnerHTML={{__html: message}}></ErrorMessage>
          </StyledAlert>
      )}
      {status === "success" && (
        <StyledAlert severity="success">
          <AlertTitle>Success!</AlertTitle>
            Thanks for subscribing!
        </StyledAlert>
      )}
      <FormWrapper>
        <input
          ref={node => (email = node)}
          type="email"
          name="email"
          placeholder="Your email"
        />
        <FormButton color="default" variant="contained" onClick={onSubmit}>
          Submit
        </FormButton>
      </FormWrapper>
    </Container>
  )
};