import React, {useRef} from "react";
import Intro from "./Intro";
import Particles from 'react-particles-js';
import Features from "./Features";
import About from "./About";
import AddOns from "./Addons";
import Guide from "./Guide";
import Starter from "./Starter";
import UseCase from "./UseCase";

const App: React.FC = () => {

  const guideRef = useRef(null);
  const featuresRef = useRef(null);

  return (
    <>
    <div className="bg-gray-900" >
      <Intro guideRef={guideRef} featuresRef={featuresRef} />
      <UseCase />
      <Features ref={featuresRef} />
      <AddOns />
      <Guide ref={guideRef} />
      <About />
    </div>
    
    </>
  );
};

export default App;
