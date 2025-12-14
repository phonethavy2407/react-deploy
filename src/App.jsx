import React from "react";

import { Routes, Route } from "react-router";
import MarKetItemApp from "./components/MarKetItemApp";

const App = () => {
  return (
    <Routes>
      <Route index element={<MarKetItemApp />} />
    </Routes>
  );
};

export default App;
