import React from "react";

import { Typography } from "antd";
import { Link } from "react-router-dom";
import Logo from "../assets/src-eco-conception/logo.svg"

const { Text } = Typography;

interface ModalHeaderProps {
  open: boolean;
}

const ModalHeader: React.FunctionComponent<ModalHeaderProps> = ({ open }) => {
  return (
    <div>
      <div className={`fixed flex w-screen items-center justify-between p-6 ${open === true ? "" : "hidden"}`}>
        <div>
          <Link to={"/"} className="flex items-center justify-between">
            <img src={Logo} className="mr-3" />
            <Text className="font-laBelleAurore sm:text-xl lg:text-4xl text-white">
              Le pavillon gourmand
            </Text>
          </Link>
        </div>
        <div className="items-stretch p-1">
          <ul className="flex">
            <li className="p-5">
              <a
                href="/place"
                className="font-jacquesFrancois sm:text-lg lg:text-2xl text-white hover:underline"
              >
                Un lieu
              </a>
            </li>
            <li className="p-5">
              <a
                href="/moment"
                className="font-jacquesFrancois sm:text-lg lg:text-2xl text-white hover:underline"
              >
                Un moment
              </a>
            </li>
            <li className="p-5">
              <a
                href="/find_us"
                className="font-jacquesFrancois sm:text-lg lg:text-2xl text-white hover:underline"
              >
                Nous trouver
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalHeader;
