import React from "react";

import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";

import "./App.css";

const App = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
