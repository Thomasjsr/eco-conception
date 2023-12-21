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
        {isListVisible ? <CloseOutlined onClick={toggleListVisibility} className="text-2xl text-white cursor-pointer"/> : <MenuOutlined onClick={toggleListVisibility} className="text-2xl text-white cursor-pointer"/>}
        {isListVisible && (
             <ul className="absolute top-20 right-0 text-white">
              <li className="p-2">
                <a
                  href="/place"
                  className="font-jacquesFrancois sm:text-lg lg:text-2xl text-white hover:underline"
                >
                  Un lieu
                </a>
              </li>
              <li className="p-2">
                <a
                  href="/moment"
                  className="font-jacquesFrancois sm:text-lg lg:text-2xl text-white hover:underline"
                >
                  Un moment
                </a>
              </li>
              <li className="p-2">
                <a
                  href="/find_us"
                  className="font-jacquesFrancois sm:text-lg lg:text-2xl text-white hover:underline"
                >
                  Nous trouver
                </a>
              </li>
            </ul>
          )}
      </div>
    </div>
  );
};

export default ModalHeaderMobile;
