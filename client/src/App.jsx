import "./App.css";
import ChatSection from "./containers/ChatSection";
import Chatbar from "./containers/Chatbar";

function App() {
  return (
    <div className="container">
      <Chatbar />
      <ChatSection />
    </div>
  );
}

export default App;
