import React from "react";
import { useLocation } from "react-router-dom";
function AiServiceDetail() {
  const location = useLocation();
  const item = location.state.item;
  return <>{item.name}</>;
}

export default AiServiceDetail;
