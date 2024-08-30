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
import Financialinsti from "./Pages/Learnmorepage/Financialinsti";
import Companylaw from "./Pages/Learnmorepage/Companylaw";
import Devagenci from "./Pages/Learnmorepage/Devagenci";
import Immingration from "./Pages/Learnmorepage/Immingration";
import Employmentandlab from "./Pages/Learnmorepage/Employmentandlab";
import Energyandres from "./Pages/Learnmorepage/Energyandres";
import Insurance from "./Pages/Learnmorepage/Insurance";
import Investmana from "./Pages/Learnmorepage/Investmana";
import Litigationandarb from "./Pages/Learnmorepage/Litigationandarb";
import Manufacturing from "./Pages/Learnmorepage/Manufacturing";
import Privateequity from "./Pages/Learnmorepage/Privateequity";
import Projectfinaandtrans from "./Pages/Learnmorepage/Projectfinaandtrans";
import Realestateandconv from "./Pages/Learnmorepage/Realestateandconv";
import Restructuring from "./Pages/Learnmorepage/Restructuring";
import Riskmana from "./Pages/Learnmorepage/Riskmana";
import Trust from "./Pages/Learnmorepage/Trust";
import Intelpro from "./Pages/Learnmorepage/Intelpro";
import Notfoundpage from "./Pages/Notfoundpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout />}>
      <Route index element={<Homepage />} />
      <Route path="/Praticearea" element={<Pratice />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/team" element={<Ourteam />} />
      <Route path="/trust" element={<Trust />} />
      <Route path="/contactus" element={<Contactus2 />} />
      <Route path="/baking" element={<Baking />} />
      <Route path="/finacialinst" element={<Financialinsti />} />
      <Route path="/companylaw" element={<Companylaw />} />
      <Route path="/devagenci" element={<Devagenci />} />
      <Route path="/litigationarb" element={<Litigationandarb />} />
      <Route path="/immigration" element={<Immingration />} />
      <Route path="/employmentlab" element={<Employmentandlab />} />
      <Route path="/energyres" element={<Energyandres />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/investmana" element={<Investmana />} />
      <Route path="/manufacturing" element={<Manufacturing />} />
      <Route path="/privateequity" element={<Privateequity />} />
      <Route path="/projectfina" element={<Projectfinaandtrans />} />
      <Route path="/restructuringinvol" element={<Restructuring />} />
      <Route path="/realestate" element={<Realestateandconv />} />
      <Route path="/riskmanagement" element={<Riskmana />} />
      {/* <Route path="/trust" element={<Trustandestate />} /> */}
      <Route path="/intelpro" element={<Intelpro />} />
      <Route path="*" element={<Notfoundpage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
