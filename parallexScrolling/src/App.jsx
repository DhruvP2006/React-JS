import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

import moon from "./assets/moon.png";
import land from "./assets/land.png";
import cat from "./assets/cat.gif";

import "./App.css";

function App() {
  const ref = useRef();
  return (
    <div>
      <Parallax pages={4} ref={ref}>
        {/* <ParallaxLayer offset={0.2} speed={0.05}>
          <h2>Welcome to My Website</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={2}>
          <h2>Web development is fun!</h2>
        </ParallaxLayer> */}
        <ParallaxLayer
          offset={0} //position on the page
          speed={1} // speed at which the layer will scroll
          factor={2} // the numeber of pages that a layer will span
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2} //position on the page
          speed={1} // speed at which the layer will scroll
          factor={4} // the numeber of pages that a layer will span
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Web Developmet is Fun!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
