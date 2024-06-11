import { useState } from "react";
import Add from "./pages/Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import View from "./pages/View";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add />}></Route>
          <Route path="/View" element={<View />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
