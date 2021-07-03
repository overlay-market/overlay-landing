import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components/macro';
import { TransitionAlert } from '../TransitionAlert/TransitionAlert';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const FormWrapper = styled.div`
  display: flex;
  width: 85%;
`

const FormButton = styled(Button)`
  text-transform: capitalize !important;
  border-radius: 0px !important;
  box-shadow: none !important;
`

const ErrorMessage = styled.div`
  font-size: 12px;
`

const StyledTextField = styled(TextField)`

  div {
    border-radius: 0px !important;
  }
`
interface EmailSignupFormProps {
  status: any
  message: any
  onValidated: any
}

export const EmailSignupForm = ({ status, message, onValidated }: EmailSignupFormProps ) => {
  let email: any;

  let updateMessage = message.replace('your profile', 'preferences');

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
              <ErrorMessage dangerouslySetInnerHTML={{__html: updateMessage}}></ErrorMessage>
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
        <StyledTextField
          inputRef={node => (email = node)}
          id="outline-required"
          label="Email"
          variant="outlined"
          size="small"
          type="email"
          name="email"
          placeholder="Your email..."
        />
        <FormButton color="default" variant="contained" onClick={onSubmit}>
          Submit
        </FormButton>
      </FormWrapper>
    </Container>
  )
};