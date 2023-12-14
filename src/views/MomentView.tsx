import React from "react";
import { Button } from "antd";
import { RouteProps } from "react-router-dom";
import ModalHeader from "../components/ModalHeader";
import ModalFooter from "../components/ModalFooter";

const MomentView: React.FunctionComponent<RouteProps> = () => {
    return (
        <div className="flex h-screen flex-col justify-between">
            <ModalHeader />
            <Button>
                Moment Page
            </Button>
            <ModalFooter />
        </div>
    );
};

export default MomentView;
