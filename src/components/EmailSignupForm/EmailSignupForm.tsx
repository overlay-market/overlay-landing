import { Button } from '@material-ui/core';
import styled from 'styled-components/macro';
import { TransitionAlert } from '../TransitionAlert/TransitionAlert';

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
        <TransitionAlert
          severity={'info'}
          title={'In Progress'}
          message={'Sending...'}
          />
          }
      {status === "error" && (
          <TransitionAlert
            severity={'error'}
            title={'Error'}
            >
              <ErrorMessage dangerouslySetInnerHTML={{__html: message}}></ErrorMessage>
            </TransitionAlert>
      )}
      {status === "success" && (
        <TransitionAlert 
          severity={'success'} 
          title={'Success!'} 
          message={'Thanks for subscribing!'}
          />
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