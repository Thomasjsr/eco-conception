import React, { useState } from "react";

import { Link } from "react-router-dom";
import Logo from "../assets/src-eco-conception/logo.svg"
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

interface ModalHeaderMobileProps {
  open: boolean;
}

const ModalHeaderMobile: React.FunctionComponent<ModalHeaderMobileProps> = ({ open }) => {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <div className={`${open === true ? "" : "hidden"}`}>
      <div className="fixed flex items-center p-6 justify-between w-full">
        <div>
          <Link to={"/"} className="flex items-center justify-between">
            <img src={Logo} className="mr-3" />
          </Link>
        </div>
        {isListVisible ? <CloseOutlined onClick={toggleListVisibility} className="text-2xl text-white cursor-pointer" /> : <MenuOutlined onClick={toggleListVisibility} className="text-2xl text-white cursor-pointer" />}
        {isListVisible && (
          <ul className="absolute top-20 right-0 text-white">
            <li className="p-2">
              <Link
                to="/place"
                className="font-serif sm:text-lg lg:text-2xl text-white hover:underline"
              >
                Un lieu
              </Link>
            </li>
            <li className="p-2">
              <Link
                to="/moment"
                className="font-serif sm:text-lg lg:text-2xl text-white hover:underline"
              >
                Un moment
              </Link>
            </li>
            <li className="p-2">
              <Link
                to="/find_us"
                className="font-serif sm:text-lg lg:text-2xl text-white hover:underline"
              >
                Nous trouver
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ModalHeaderMobile;
