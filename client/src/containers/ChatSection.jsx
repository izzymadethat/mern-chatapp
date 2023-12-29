import MessageBox from "./MessageBox";
import MessageInput from "../components/MessageInput";

const ChatSection = () => {
  return (
    <section className="chat-section">
      <MessageBox />
      <MessageInput />
    </section>
  );
};

export default ChatSection;
