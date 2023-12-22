import React, { useEffect, useState } from "react";
import { RouteProps } from "react-router-dom";
import ModalHeader from "../components/ModalHeader";
import ModalFooter from "../components/ModalFooter";
import { Typography } from 'antd';
import ModalHeaderMobile from "../components/ModalHeaderMobile";

const { Text } = Typography;

const HomeView: React.FunctionComponent<RouteProps> = () => {
    const [open, setOpen] = useState(window.innerWidth > 640 ? false : true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imagesFirstCarousel = [
        "reportage_portraits_cuisine_salle_46.webp",
        "CLOS_DES_SENS_MATTHIEU_CELLARD_SALLE_38_2.webp",
        "clos_des_sens_juin_2022_cortil_jardin_43.webp",
        "cortil_septembre_2021_reportage_27.webp"
    ]

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

    useEffect(() => {
        // Change l'image toutes les 5 secondes
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesFirstCarousel.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [imagesFirstCarousel.length]);
    return (
        <div className="flex flex-col">
            <ModalHeader open={!open} />
            <ModalHeaderMobile open={open} />
            <div className="h-screen">
                <div
                    className={`flex justify-start items-end h-1/2 lg:h-screen md:h-1/2 bg-[url('./assets/webp-images/${imagesFirstCarousel[currentImageIndex]}')] bg-cover bg-no-repeat bg-top transition-all duration-500 ease-in-out`}
                >
                    <Text className="text-white font-changaOne text-lg sm:text-xl md:text-3xl lg:text-5xl pb-8 pl-6">
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
                    <div className="w-1/2 bg-[url('./assets/webp-images/clos_des_sens_juin_2022_salle_7.webp')] bg-cover">
                    </div>
                </div>
            </div>
            {/* <ModalFooter /> */}
        </div>
    );
};

export default HomeView;
