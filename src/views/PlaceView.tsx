import React, { useEffect, useState } from "react";
import { Typography } from 'antd';
import { RouteProps } from "react-router-dom";
import ModalHeader from "../components/ModalHeader";
import ModalFooter from "../components/ModalFooter";
import ModalHeaderMobile from "../components/ModalHeaderMobile";
import {
    imagesPlaceFirst,
    imagesHomeSecondCarousel,
    imagesPlaceSecond,
    imagesPlaceThirdRight,
    imagesPlaceThirdLeft
} from "../utils/images"
import Carousel from "../components/Carousel"

const { Text } = Typography;

const PlaceView: React.FunctionComponent<RouteProps> = () => {
    const [open, setOpen] = useState(window.innerWidth > 640 ? false : true);
    const [videoPlaying, setVideoPlaying] = useState(false);

    const handleVideoHover = (play: boolean) => {
        setVideoPlaying(play);
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
                <div className="flex h-1/4 lg:h-screen md:h-screen justify-start items-end">
                    <div className="h-full">
                        <img src={imagesPlaceFirst} className="object-cover h-full w-screen" />
                    </div>
                </div>
                <div className="flex h-screen flex-col sm:flex-row">
                    <div className="flex justify-start items-center w-full sm:w-1/2 h-1/2 sm:h-full bg-[#051528]">
                        <div className="flex flex-col p-3 lg:p-6 xl:p-10 lg:w-2/3">
                            <Text className="text-white font-changaOne sm:text-3xl lg:text-5xl text-lg lg:pb-3">
                                UN LIEU
                            </Text>
                            <Text className="text-[#F2F2F2] font-sans font-light sm:text-xl lg:text-4xl text-xs lg:tracking-wide">
                                Univers singulier, identitaire et façonné par l’homme. Essences de bois brulé, pierre de Savoie et cristal taillé, la salle, apaisante et épurée, accueille l’authentique transparence réconfort
                            </Text>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 h-1/2 sm:h-full">
                        <Carousel images={imagesHomeSecondCarousel} />
                    </div>
                </div>
                <div className="flex h-screen flex-col-reverse sm:flex-row">
                    <div className="w-full sm:w-1/2 h-1/2 sm:h-full">
                        <img src={imagesPlaceSecond} className="object-cover h-full w-screen" loading="lazy"/>
                    </div>
                    <div className="flex justify-start items-center w-full sm:w-1/2 h-1/2 sm:h-full bg-[#051528]">
                        <div className="flex flex-col p-3 lg:p-6 lg:w-2/3">
                            <Text className="text-white font-changaOne sm:text-3xl lg:text-5xl text-lg lg:pb-3">
                                LE JARDIN
                            </Text>
                            <Text className="text-[#F2F2F2] font-sans font-light sm:text-xl lg:text-4xl text-xs lg:tracking-wide">
                                Inspiration quotidienne, dans son jus, le végétal s’exprime au gré du temps, dans ses moindres mouvements, discret ou profus, libre d’être soi.
                            </Text>
                        </div>
                    </div>
                </div>
                <div className="flex h-screen flex-col sm:flex-row">
                    <div className="flex flex-col justify-start items-center w-full sm:w-1/2 h-1/2 sm:h-full bg-[#051528]">
                        <div className="flex flex-col justify-center items-start p-3 lg:p-6 h-1/2 w-full">
                            <Text className="text-white font-changaOne sm:text-3xl lg:text-5xl text-lg lg:pb-3">
                                ESPRITS ENGAGÉS
                            </Text>
                            <Text className="text-[#F2F2F2] font-sans font-light sm:text-xl lg:text-4xl text-xs lg:tracking-wide">
                                Épouser une identité unique, pousser jusqu’à l’ultime sa passion sensible et émotionnelle, curieuse et libre d’être.
                            </Text>
                        </div>
                        <div className="flex w-full h-1/2 sm:h-full bg-white">
                            <img src={imagesPlaceThirdLeft} className="object-cover h-full w-screen" loading="lazy"/>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 h-1/2 sm:h-full">
                        {videoPlaying === false && (
                            <img
                                src={imagesPlaceThirdRight}
                                className="object-cover h-full w-screen"
                                onMouseEnter={() => handleVideoHover(true)}
                                onMouseLeave={() => handleVideoHover(false)}
                            />
                        )}
                        {videoPlaying === true && (
                            <iframe
                                className="h-full w-full"
                                src="https://www.youtube.com/embed/uceaJ__FZg4?autoplay=1&loop=1"
                                allowFullScreen
                                onMouseEnter={() => handleVideoHover(true)}
                                onMouseLeave={() => handleVideoHover(false)}
                            />
                        )}
                    </div>
                </div>
                <ModalFooter />
            </div>
        </div>
    );
};

export default PlaceView;
