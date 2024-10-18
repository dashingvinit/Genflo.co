import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Landing from "./Landing";

function Pages() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route index path="/home" element={<Home />} />
      </Routes>
    </>
  );
}
export default Pages;
