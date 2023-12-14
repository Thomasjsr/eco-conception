import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const ModalFooter: React.FunctionComponent = () => {
  return (
    <div className="relative">
      <div className="border-grey flex flex-col items-center border-t-2 text-center">
        <div className="container p-2">
          <Text className="flex items-center justify-center">
            Le pavillon gourmand
          </Text>
        </div>
        <div className="w-full p-4 text-center">
          <Text>mentions légales</Text>
        </div>
      </div>
    </div>
  );
};

export default ModalFooter;
