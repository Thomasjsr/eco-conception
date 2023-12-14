import React from "react";

import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const ModalHeader: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute w-full">
      <div className="flex justify-between">
        <div className="p-6">
          <Button
            onClick={() => navigate("/")}
            className="font-changaOneItalic"
            type="text"
          >
            Le pavillon gourmand
          </Button>
        </div>
        <div className="p-6">
          <Button
            onClick={() => {
              console.log("test")
            }}
            className="font-bold"
            type="text"
          >
            Un lieu
          </Button>
          <Button
            onClick={() => {
              console.log("test")
            }}
            className="font-bold"
            type="text"
          >
            Un moment
          </Button>
          <Button
            onClick={() => {
              console.log("test")
            }}
            className="font-bold"
            type="text"
          >
            Nous trouver
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalHeader;
