import Buddies from "../containers/Buddies";
import LogoSection from "../components/LogoSection";
import User from "../components/User";

const Chatbar = () => {
  return (
    <header className="chatbar">
      <LogoSection />
      <Buddies />
      <User />
    </header>
  );
};

export default Chatbar;
