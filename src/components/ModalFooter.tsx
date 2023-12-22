import React from "react";
import { Typography } from "antd";
import Relais_svg from "../assets/src-eco-conception/relais-chateaux.svg"
import Michelin_svg from "../assets/src-eco-conception/michelin-2023.svg"
import Gaut_svg from "../assets/src-eco-conception/gault-millau.svg"
import Eco_svg from "../assets/src-eco-conception/ecotable.svg"

const { Text } = Typography;

const ModalFooter: React.FunctionComponent = () => {
  return (
    <div className="relative">
      <div className="border-grey flex flex-col text-center bg-black w-full sm:h-[335px] lg:h-[670px]">
        <div className="text-white h-1/2 flex bg-gray-900 items-center justify-evenly p-10">
          <img src={Relais_svg}></img>
          <img src={Michelin_svg}></img>
          <img src={Gaut_svg}></img>
          <img src={Eco_svg}></img>
        </div>
        <div className="text-white h-1/2 flex items-end justify-between p-12">
          <Text className="text-[#f2f2f2]">Pavillon gourmand</Text>
          <Text className="text-[#f2f2f2]">Mention légales</Text>
        </div>
      </div>
    </div>
  );
};

export default ModalFooter;
