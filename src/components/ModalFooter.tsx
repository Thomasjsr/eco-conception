import React from "react";
import { Typography } from "antd";
import Relais_svg from "../assets/src-eco-conception/relais-chateaux.svg"
import Michelin_svg from "../assets/src-eco-conception/michelin-2023.svg"
import Gaut_svg from "../assets/src-eco-conception/gault-millau.svg"
import Eco_svg from "../assets/src-eco-conception/ecotable.svg"

const { Text } = Typography;

const ModalFooter: React.FunctionComponent = () => {
  return (
    <div className="flex min-h-36 lg:h-72 md:min-h-80 xl:min-h-96">
      <div className="border-grey flex flex-col text-center bg-black w-full">
        <div className="text-white h-1/2 flex bg-gray-900 items-center justify-evenly p-1">
          <img src={Relais_svg} className="w-10 md:w-20" loading="lazy"></img>
          <img src={Michelin_svg} className="w-10 md:w-20" loading="lazy"></img>
          <img src={Gaut_svg} className="w-10 md:w-20" loading="lazy"></img>
          <img src={Eco_svg} className="w-10 md:w-20" loading="lazy"></img>
        </div>
        <div className="text-white h-1/2 flex items-end justify-between p-2 md:p-6 xl:p-10">
          <Text className="text-[#f2f2f2] text-sm md:text-xl xl:text-2xl">Pavillon gourmand</Text>
          <Text className="text-[#f2f2f2] text-sm md:text-xl xl:text-2xl">Mention légales</Text>
        </div>
      </div>
    </div>
  );
};

export default ModalFooter;
