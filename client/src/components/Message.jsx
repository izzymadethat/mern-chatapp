const Message = ({ message }) => {
  return (
    <>
      <div className="message">
        <div className={message.messageType}>
          <p>{message.message}</p>
        </div>
      </div>
    </>
  );
};

export default Message;
