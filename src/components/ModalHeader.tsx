import React from "react";

import { Button, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/src-eco-conception/logo.svg"

const { Text } = Typography;

const ModalHeader: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute flex w-screen items-center justify-between p-6">
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
            navigate('/place')
          }}
          className="font-jacquesFrancois sm:text-lg lg:text-2xl"
          type="text"
        >
          Un lieu
        </Button>
        <Button
          onClick={() => {
            navigate('/moment')
          }}
          className="font-jacquesFrancois sm:text-lg lg:text-2xl"
          type="text"
        >
          Un moment
        </Button>
        <Button
          onClick={() => {
            navigate('/find_us')
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
