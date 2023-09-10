import React, { useEffect, useRef, useState } from "react";
import TRUNK from "vanta/dist/vanta.trunk.min";

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TRUNK({
          el: vantaRef.current, // Use the ref here
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff2b,
          backgroundColor: 0x0,
          spacing: 10.0,
          chaos: 10.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div className="app" ref={vantaRef}></div>;
};

export default VantaBackground;
