import Message from "../components/Message";

const MessageBox = ({ messages }) => {
  return (
    <div className="messages-container">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default MessageBox;
