import Cars from "./Cars/Cars.jsx";
import Header from "./Header/Header.jsx";
import Hero from "./Hero/Hero.jsx";
import { model3, modelY, modelX, modelS } from "./assets/carsImages/index.js";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Cars
        model="Model Y"
        subText="0% APR Available"
        lowerText="Lease Starting at $349/mo"
        bgImage={modelY}
      />
      <Cars
        model="Model 3"
        subText="0% APR Available"
        lowerText="Lease Starting at $299/mo"
        bgImage={model3}
      />
      <Cars
        model="Model X"
        subText="From $65,990"
        lowerText="After Federal Tax Credit $7,500
        and Est. Gas Savings $6,500"
        bgImage={modelX}
        subtextStyle="none"
        lowerTextStyle="underline"
      />
      <Cars
        model="Model S"
        subText="From $68,490"
        lowerText="After Est. Gas Savings $6,500"
        bgImage={modelS}
        subtextStyle="none"
        lowerTextStyle="underline"
      />
    </>
  );
}

export default App;
