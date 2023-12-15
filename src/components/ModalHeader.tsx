import React from "react";

import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import Logo from "../assets/src-eco-conception/logo.svg"

const { Text } = Typography;

const ModalHeader: React.FunctionComponent = () => {
  return (
    <div className="flex w-screen items-center justify-between bg-slate-200 p-6">
      <div>
        <Link to={"/"} className="flex items-center justify-between">
          <img src={Logo} className="mr-3" />
          <Text className="font-laBelleAurore sm:text-xl lg:text-4xl">
            Le pavillon gourmand
          </Text>
        </Link>
      </div>
      <div className="items-stretch p-1">
        <Button
          onClick={() => {
            console.log("test")
          }}
          className="font-jacquesFrancois sm:text-lg lg:text-2xl"
          type="text"
        >
          Un lieu
        </Button>
        <Button
          onClick={() => {
            console.log("test")
          }}
          className="font-jacquesFrancois sm:text-lg lg:text-2xl"
          type="text"
        >
          Un moment
        </Button>
        <Button
          onClick={() => {
            console.log("test")
          }}
          className="font-jacquesFrancois sm:text-lg lg:text-2xl"
          type="text"
        >
          Nous trouver
        </Button>
      </div>
    </div>
  );
};

export default ModalHeader;
