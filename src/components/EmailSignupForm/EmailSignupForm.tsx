import { Button } from '@material-ui/core';
import {Alert, AlertTitle }  from '@material-ui/lab';
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
        <Alert severity="success">
          <AlertTitle>In Progress</AlertTitle>
          Sending...
        </Alert>}
      {status === "error" && (
        <Alert severity="error"> 
          <AlertTitle>Error</AlertTitle>
          <ErrorMessage dangerouslySetInnerHTML={{__html: message}}></ErrorMessage>
          </Alert>
      )}
      {status === "success" && (
        <Alert severity="success">
          <AlertTitle>Success!</AlertTitle>
          Thanks for subscribing!
        </Alert>
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