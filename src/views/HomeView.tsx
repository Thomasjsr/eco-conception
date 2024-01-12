import React, { useEffect, useState } from "react";
import { RouteProps } from "react-router-dom";
import ModalHeader from "../components/ModalHeader";
import ModalFooter from "../components/ModalFooter";
import { Typography } from 'antd';
import ModalHeaderMobile from "../components/ModalHeaderMobile";
import { imagesHomeFirstCarousel } from "../utils/images"
import Carousel from "../components/Carousel"

const { Text } = Typography;

const HomeView: React.FunctionComponent<RouteProps> = () => {
    const [open, setOpen] = useState(window.innerWidth > 640 ? false : true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 640) {
                setOpen(false);
            } else {
                setOpen(true)
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <ModalHeader open={!open} />
            <ModalHeaderMobile open={open} />
            <div className="w-screen h-screen">
                <div className="flex h-full justify-start items-end">
                    <div className="h-full">
                        <Carousel images={imagesHomeFirstCarousel} />
                    </div>
                    <Text className="absolute text-white font-changaOne text-lg sm:text-xl md:text-3xl lg:text-5xl pb-8 pl-6">
                        Restaurant<br />
                        gastronomique<br />
                        végétal & lacustre<br />
                        3* MICHELIN ANNECY<br />
                    </Text>
                </div>
                <ModalFooter />
            </div>
        </div>
    );
};

export default HomeView;
