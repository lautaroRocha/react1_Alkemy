import { useEffect } from "react";
import { useLocation } from "react-router";
import React from "react";

const Scroll = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};

export default Scroll;