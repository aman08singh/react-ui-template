import React from "react";
import { Link } from "react-router-dom";

export default function GotoPageTop() {
  return (
    <Link className="scroll-to-top rounded" to="#page-top">
      <i className="fas fa-angle-up" />
    </Link>
  );
}
