import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import Doctor from "./Doctor";
import Signin from "./authentication/mainsignin";  // From branch2
import Signup from "./authentication/mainsignup";  // From branch2
import Issues from "./Issues";                     // From master
import Resource from "./Resource";                 // From master
import Mental from "./Mental";                     // From master

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/login" element={<Signin />} />    {/* From branch2 */}
        <Route path="/signup" element={<Signup />} />   {/* From branch2 */}
        <Route path="/issues" element={<Issues />} />   {/* From master */}
        <Route path="/resource" element={<Resource />} />{/* From master */}
        <Route path="/mental" element={<Mental />} />   {/* From master */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
