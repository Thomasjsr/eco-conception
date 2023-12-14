import React from "react";
import { Button } from "antd";
import { RouteProps } from "react-router-dom";
import ModalHeader from "../components/ModalHeader";
import ModalFooter from "../components/ModalFooter";

const PlaceView: React.FunctionComponent<RouteProps> = () => {
    return (
        <div className="flex h-screen flex-col justify-between">
            <ModalHeader />
            <Button>
                Place Page
            </Button>
            <ModalFooter />
        </div>
    );
};

export default PlaceView;
