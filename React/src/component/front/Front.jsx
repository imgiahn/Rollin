import React, { useState, useEffect } from "react";
import Login from "./Login";
import Join from "./Join";
import { useSelector, useDispatch } from "react-redux";
const Front = () => {
  const page = useSelector((state) => state.page);

  const user = useSelector((state) => state.user);

  return page.second ? <Join /> : <Login />;
};

export default Front;
