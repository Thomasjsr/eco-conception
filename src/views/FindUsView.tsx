import React from "react";
import { Button } from "antd";
import { RouteProps } from "react-router-dom";
import ModalHeader from "../components/ModalHeader";
import ModalFooter from "../components/ModalFooter";

const FindUsView: React.FunctionComponent<RouteProps> = () => {
    return (
        <div className="flex h-screen flex-col justify-between">
            <ModalHeader />
            <div className="flex flex-col">
                <div className="w-full h-[1080px] bg-[url('../\src\assets\webp-images\4f6ad94d-47ef-4140-8384-32abd5685bdd_clos-des-sens-sept-2018-reportage-77.webp')] bg-contain bg-no-repeat bg-top"></div>
                <div className="w-full h-screen flex">
                    <div className="h-full w-1/2 bg-gray-900"></div>
                    <div className="h-full w-1/2 bg-gray-500 flex items-center justify-center">MAP</div>
                </div>
            </div>
            <ModalFooter />
        </div>
    );
};

export default FindUsView;
