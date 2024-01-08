import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import AnimatedCursor from "react-animated-cursor";
import KnowUs from "./views/KnowUs";
import KnowServices from "./views/KnowServices";
import KnowConnect from "./views/KnowConnect";

function App() {
 
  return (
    <div className="App bg-secondary ">
      <AnimatedCursor
      innerSize={20}
      outerSize={50}
      outerStyle={{'mixBlendMode': 'difference'}}
      color='255, 0, 0'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        'Link',
      ]}
    />
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="knowus" element={ <KnowUs/> } />
        <Route path="knaowservices" element={ <KnowServices/> } />
        <Route path="knowconnect" element={ <KnowConnect/> } />
      </Routes>
    </div>
  );
}

export default App;
