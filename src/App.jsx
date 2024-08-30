import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from "./Components/Layouts/Mainlayout";
import Homepage from "./Pages/Homepage";
import Pratice from "./Pages/Pratice";
import Aboutus from "./Components/Aboutus";
import Ourteam from "./Components/Ourteam";
import Contactus2 from "./Components/Contatct2";
import Baking from "./Pages/Learnmorepage/Baking";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout />}>
      <Route index element={<Homepage />} />
      <Route path="/Praticearea" element={<Pratice />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/team" element={<Ourteam />} />
      <Route path="/contactus" element={<Contactus2 />} />
      <Route path="/baking" element={<Baking />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
