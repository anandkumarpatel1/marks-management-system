import React from "react";
import "../styles/Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div class="pl">
        <div class="pl__bubble">
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
        </div>
        <div class="pl__bubble">
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
        </div>
        <div class="pl__bubble">
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
          <div class="pl__bubble-drop"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
