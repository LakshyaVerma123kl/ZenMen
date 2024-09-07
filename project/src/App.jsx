import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import Doctor from "./Doctor";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
