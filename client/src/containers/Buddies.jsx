// Container to hold all of the containers
import { useState } from "react";
import BuddyContact from "../components/BuddyContact";
import { sampleBuddies } from "../tests";

const Buddies = () => {
  const [buddies, setBuddies] = useState(sampleBuddies);

  function changeBuddy(index) {
    setBuddies((prevBuddies) => {
      return prevBuddies.map((buddy, i) => ({
        ...buddy,
        active: i === index ? !buddy.active : false,
      }));
    });
  }

  return (
    <div className="buddy-container">
      {buddies.map((buddy, index) => (
        <BuddyContact
          key={index}
          name={buddy.name}
          buddy={buddy.active}
          onClick={() => changeBuddy(index)}
        />
      ))}
    </div>
  );
};

export default Buddies;
