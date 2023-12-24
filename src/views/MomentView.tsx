import React, { useEffect, useState } from "react";
import { RouteProps } from "react-router-dom";
import ModalHeader from "../components/ModalHeader";
import ModalFooter from "../components/ModalFooter";
import { Typography, Button } from 'antd';
import ModalHeaderMobile from "../components/ModalHeaderMobile";
import {
    imagesMomentFirst,
    imagesMomentSecond1,
    imagesMomentSecond2,
    imagesMomentSecond3,
    imagesMomentFourLeft,
    imagesMomentFourRight,
    mushroomVideo,
    menuPDF,
    vinsPDF
} from "../utils/images"

const { Text } = Typography;

const MomentView: React.FunctionComponent<RouteProps> = () => {
    const [open, setOpen] = useState(window.innerWidth > 640 ? false : true);

    const handleDownloadMenu = (namePdf: string, title: string) => {
        const link = document.createElement("a");

        link.href = namePdf;
        link.download = title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
            <div className="w-screen">
                <div className="flex h-1/4 xl:h-screen md:h-1/4 justify-start items-end">
                    <div className="h-full">
                        <img src={imagesMomentFirst} className="object-cover h-full w-screen" />
                    </div>
                </div>
                <div className="flex h-1/4 xl:h-screen md:h-1/4">
                    <div className="flex justify-start items-center w-1/2 bg-[#251715]">
                        <div className="flex flex-col p-3 lg:p-6 xl:p-10 lg:w-2/3">
                            <Text className="text-white font-changaOne sm:text-3xl lg:text-4xl text-lg lg:pb-3 pb-1">
                                ÂME VÉGÉTALE ET LACUSTRE
                            </Text>
                            <Text className="text-[#F2F2F2] font-openSansLight sm:text-xl lg:text-2xl text-xs lg:tracking-wide pb-2">
                                Reflet d’un garde-manger nourricier, la cuisine, brut et authentique dessine ses lignes dans ses courbes sauvages et charnelles sans contour
                            </Text>
                            <Button
                                onClick={() => handleDownloadMenu(menuPDF, "menu.pdf")}
                                className="flex items-center justify-center text-white font-openSansLight w-2/3 sm:w-40 xl:w-60 xl:h-10 sm:text-xl lg:text-2xl text-xs"
                            >
                                Notre menu
                            </Button>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="flex h-1/2">
                            <div className="w-1/2">
                                <img src={imagesMomentSecond1} className="object-cover h-full w-screen" />
                            </div>
                            <div className="w-1/2">
                                <img src={imagesMomentSecond3} className="object-cover h-full w-screen" />
                            </div>
                        </div>
                        <div className="flex h-1/2">
                            <div className="w-1/2">
                                <img src={imagesMomentSecond2} className="object-cover h-full w-screen" />
                            </div>
                            <div className="w-1/2">
                                <img src={imagesMomentFirst} className="object-cover h-full w-screen" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex h-1/4 xl:h-screen md:h-1/4">
                    <div className="w-1/2">
                        <video src={mushroomVideo} autoPlay={true} loop className="object-cover h-full w-screen" />
                    </div>
                    <div className="flex justify-start items-center w-1/2 bg-[#251715]">
                        <div className="flex flex-col p-3 lg:p-6 lg:w-2/3">
                            <Text className="text-white font-changaOne sm:text-3xl lg:text-4xl text-lg lg:pb-3">
                                LA CUEILLETTE
                            </Text>
                            <Text className="text-[#F2F2F2] font-openSansLight sm:text-xl lg:text-2xl text-xs lg:tracking-wide">
                                Inspiration quotidienne, dans son jus, le végétal s’exprime au gré du temps, dans ses moindres mouvements, discret ou profus, libre d’être soi.
                            </Text>
                        </div>
                    </div>
                </div>
                <div className="flex h-1/4 xl:h-screen md:h-1/4">
                    <div className="flex flex-col justify-start items-center w-1/2 bg-[#251715]">
                        <div className="flex flex-col justify-center items-start p-3 lg:p-6 h-1/2 w-full">
                            <Text className="text-white font-changaOne sm:text-3xl lg:text-4xl text-lg lg:pb-3 pb-1">
                                VERRE DU TERROIR
                            </Text>
                            <Text className="text-[#F2F2F2] font-openSansLight sm:text-xl lg:text-2xl text-xs lg:tracking-wide pb-2">
                                Explorer un territoire et rendre à la vigne la beauté des racines locales, les cépages d’ici, écho aux flacons d’ailleurs, la pertinence d’une équipe sommelière en totale cohérence
                            </Text>
                            <Button
                                onClick={() => handleDownloadMenu(vinsPDF, "carte-des-vins.pdf")}
                                className="flex items-center justify-center text-white font-openSansLight w-2/3 sm:w-40 lg:w-60 xl:w-60 xl:h-10 sm:text-xl lg:text-2xl text-xs"
                            >
                                La carte des vins
                            </Button>
                        </div>
                        <div className="flex h-1/2 bg-white">
                            <img src={imagesMomentFourLeft} className="object-cover h-full w-screen" />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img src={imagesMomentFourRight} className="object-cover h-full w-screen" />
                    </div>
                </div>
                <ModalFooter />
            </div>
        </div>
    );
};

export default MomentView;
