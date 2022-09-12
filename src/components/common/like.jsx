import React, { useState } from "react";
import Heart from "react-heart";

function Like() {
  const [active, setActive] = useState(false);

  return (
    <div style={{ width: "1.1rem" }}>
      <Heart
        isActive={active}
        onClick={() => setActive(!active)}
        animationTrigger='both'
        inactiveColor='#000000'
        activeColor='#000000'
        style={{ marginTop: "0.5rem" }}
        animationDuration={0.05}
      />
    </div>
  );
}
export default Like;
