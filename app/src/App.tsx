import React from "react";

const Backscreen = React.lazy(() => import("backscreen/Backscreen"));
const Frontscreen = React.lazy(() => import("frontscreen/Frontscreen"));

const App = () => (
  <>
  <div className='App1'>
    <Backscreen/>
    <Frontscreen/>
  </div>
   <div className='App2'>
   </div>
   </>
);

export default App;