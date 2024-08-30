import React from "react";

import Aboutus from "../Components/Aboutus";
import Ourvalues from "../Components/Ourvalues";
import Praticeareas from "../Components/Praticeareas";
import Ourteam from "../Components/Ourteam";

const Homepage = () => {
  return (
    <>
      <Aboutus />
      <Ourvalues />
      <Praticeareas isHome={true} />
      <Ourteam />
    </>
  );
};

export default Homepage;
