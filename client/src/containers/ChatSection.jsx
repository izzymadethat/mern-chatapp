import MessageBox from "./MessageBox";
import MessageInput from "../components/MessageInput";
import { sampleMessages } from "../tests";

const ChatSection = () => {
  return (
    <section className="chat-section">
      <MessageBox messages={sampleMessages} />
      <MessageInput />
    </section>
  );
};

export default ChatSection;
