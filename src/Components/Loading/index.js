import React from "react";

import "./Loading.css";

export default function Loading() {
  return (
    <div className="loaded">
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}
