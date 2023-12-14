import React from "react";
import { Button } from "antd";
import { RouteProps } from "react-router-dom";
import ModalHeader from "../components/ModalHeader";
import ModalFooter from "../components/ModalFooter";

const FindUsView: React.FunctionComponent<RouteProps> = () => {
    return (
        <div className="flex h-screen flex-col justify-between">
            <ModalHeader />
            <div className="w-full h-full bg-[url('../\src\assets\webp-images\4f6ad94d-47ef-4140-8384-32abd5685bdd_clos-des-sens-sept-2018-reportage-77.webp')] bg-contain">hello</div>
            <ModalFooter />
        </div>
    );
};

export default FindUsView;
