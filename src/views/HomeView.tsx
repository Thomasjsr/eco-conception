import React, { useEffect, useState } from "react";
import { RouteProps } from "react-router-dom";
import ModalHeader from "../components/ModalHeader";
import ModalFooter from "../components/ModalFooter";
import { Typography } from 'antd';
import ModalHeaderMobile from "../components/ModalHeaderMobile";
import { imagesHomeFirstCarousel, imagesHomeSecondCarousel, imagesHomeThirdCarousel } from "../utils/images"
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
        <div className="flex flex-col">
            <ModalHeader open={!open} />
            <ModalHeaderMobile open={open} />
            <div className="h-screen w-screen">
                <div className="flex h-1/2 lg:h-screen md:h-1/2 justify-start items-end">
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
                <div className="flex h-1/2 lg:h-screen md:h-1/2">
                    <div className="flex justify-start items-center w-1/2 bg-[#051528]">
                        <div className="flex flex-col p-3 lg:p-6 lg:w-2/3">
                            <Text className="text-white font-changaOne sm:text-3xl lg:text-5xl text-lg lg:pb-3">
                                UN LIEU
                            </Text>
                            <Text className="text-[#F2F2F2] font-openSansLight sm:text-xl lg:text-4xl text-xs lg:tracking-wide">
                                Univers singulier, identitaire et façonné par l’homme. Essences de bois brulé, pierre de Savoie et cristal taillé, la salle, apaisante et épurée, accueille l’authentique transparence réconfort
                            </Text>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Carousel images={imagesHomeSecondCarousel} />
                    </div>
                </div>
                <div className="flex h-1/2 lg:h-screen md:h-1/2">
                    <div className="w-1/2">
                        <Carousel images={imagesHomeThirdCarousel} />
                    </div>
                    <div className="flex justify-start items-center w-1/2 bg-[#251715]">
                        <div className="flex flex-col p-3 lg:p-6 lg:w-2/3">
                            <Text className="text-white font-changaOne sm:text-3xl lg:text-5xl text-lg lg:pb-3">
                                UN MOMENT
                            </Text>
                            <Text className="text-[#F2F2F2] font-openSansLight sm:text-xl lg:text-4xl text-xs lg:tracking-wide">
                                Par le prisme culinaire, entre pudeur et force vitale, le monde du vivant s’exprime jusqu’à la quintessence. Sublimé, il livre son émotion ultime
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ModalFooter /> */}
        </div>
    );
};

export default HomeView;
