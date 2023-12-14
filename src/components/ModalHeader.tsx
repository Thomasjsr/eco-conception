import React from "react";

import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const ModalHeader: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full items-center justify-between bg-slate-500">
      <div className="p-6">
        <Button
          onClick={() => navigate("/")}
          className="font-bold"
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
          test
        </Button>
      </div>
    </div>
  );
};

export default ModalHeader;
