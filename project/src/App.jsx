import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import Doctor from "./Doctor";
import Issues from "./Issues";
import Resource from "./Resource";
import Mental from "./Mental";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/mental" element={<Mental />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
