import React from 'react';
import { EmailSignupForm, FeedCard } from "../../../components";
import MailchimpSubscribe from "react-mailchimp-subscribe";

// const url:string =
//   "//market.us6.list-manage.com/subscribe/post?u=efd8a8914b49699b891aa3125&id=6caa5905ec";
interface EmailProps {
  header: string;
}

const Email: React.FC<EmailProps> = ({header}) => {
  const url:string =
  "//market.us6.list-manage.com/subscribe/post?u=efd8a8914b49699b891aa3125&id=6caa5905ec";

    return (
      <FeedCard header={header}>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <EmailSignupForm
              status={status}
              message={message}
              // @ts-ignore
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </FeedCard>
    );
}

export default Email;