
import React, { useState } from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import { Alert, AlertTitle }  from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components/macro';

const StyledAlert = styled(Alert)`
`

const Message = styled.div`
  font-size: 12px;
`

const StyledSnackbar = styled(Snackbar)`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 888;
`

const StyledIconButton = styled(IconButton)`
  margin-bottom: auto !important;
  margin-top: 5px !important;
  margin-right: 0px !important;
`

interface TransitionAlertProps {
  message?: any
  severity: any
  title: any
  children?: React.ReactNode;
}

export const TransitionAlert: React.FC<TransitionAlertProps> = ({ message, severity, title, children }) => {
    const [open, setOpen] = useState(true);

    return (
        <StyledSnackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          autoHideDuration={1000}
          open={open}
          >
            <StyledAlert
              severity={severity}
              action={
                <StyledIconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </StyledIconButton>
              }
            >
              <AlertTitle> {title} </AlertTitle>
              <Message> {message} </Message>
              {children}
            </StyledAlert>
        </StyledSnackbar>
    );
}