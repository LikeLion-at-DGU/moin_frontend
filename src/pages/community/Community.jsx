import React from "react";
import { Link } from "react-router-dom";

function Community() {
  return (
    <>
      Community
      <Link to={``}>커뮤니티</Link>
      <Link to={``}>공지사항</Link>
      <Link to={`/suggestion`}>건의사항</Link>
    </>
  );
}

export default Community;
