import React from 'react';
import { EmailSignupForm, FeedCard} from "../../../components";

interface EmailProps {
  header: string;
}

const Email: React.FC<EmailProps> = ({header}) => {
    return (
      <FeedCard header={header}>
        <EmailSignupForm />
      </FeedCard>
    );
}

export default Email;