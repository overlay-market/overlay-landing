import MailchimpSubscribe from "react-mailchimp-subscribe";

const url:string =
  "//market.us6.list-manage.com/subscribe/post?u=efd8a8914b49699b891aa3125&id=6caa5905ec";

const MailchimpForm = () => <MailchimpSubscribe url={url} />;

const EmailSignupForm: React.FC = () => {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <div>
          {/* @ts-ignore */}
          <MailchimpForm onSubmitted={((formData:any) => subscribe(formData))} />
          {status === "sending" && (
            <div style={{ color: "grey" }}>sending...</div>
          )}
          {status === "error" && (
            <div
              style={{ color: "black" }}
              // @ts-ignore
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div style={{ color: "black" }}>Subscribed !</div>
          )}
        </div>
      )}
    />
  );
};

export default EmailSignupForm;
