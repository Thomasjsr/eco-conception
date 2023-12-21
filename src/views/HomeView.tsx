import React, { useEffect, useState } from "react";
import { RouteProps } from "react-router-dom";
import ModalHeader from "../components/ModalHeader";
import ModalFooter from "../components/ModalFooter";
import { Typography } from 'antd';
import ModalHeaderMobile from "../components/ModalHeaderMobile";

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
        <div className="flex h-screen flex-col justify-between">
            <ModalHeader open={!open} />
            <ModalHeaderMobile open={open} />
            <div className="flex flex-col">
                <div className="w-full h-screen bg-[url('../\src\assets\webp-images\76ebb484-c1af-4e95-a46e-853f00d41124_reportage-portraits-cuisine-salle-46.webp')] bg-cover bg-no-repeat bg-top">
                    <div className="absolute bottom-4 left-4 p-4">
                        <Text className="text-white font-changaOne sm:text-xl lg:text-4xl text-5xl">
                            Restaurant<br />
                            gastronomique<br />
                            végétal & lacustre<br />
                            3* MICHELIN ANNECY<br />
                        </Text>
                    </div>
                </div>
                <div className="w-full flex">
                    <div className="h-full w-1/2 bg-[#051528] flex justify-start items-center">
                        <div className="flex flex-col p-4 w-2/3">
                            <Text className="text-white font-changaOne sm:text-xl lg:text-4xl text-5xl">
                                UN LIEU
                            </Text>
                            <Text className="text-[#F2F2F2] font-openSansLight sm:text-sm lg:text-lg text-2xl leading-10">
                                Univers singulier, identitaire et façonné par l’homme. Essences de bois brulé, pierre de Savoie et cristal taillé, la salle, apaisante et épurée, accueille l’authentique transparence réconfort
                            </Text>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-start items-center bg-cover">
                        <img src="../\src\assets\webp-images\b5c82a2d-5a2a-4016-8538-61502f0de152_le+clos+des+sens+juin+2022+salle-7.webp" className="bg-cover" />
                    </div>
                </div>
                <div className="w-full flex">
                    <div className="w-1/2 flex justify-start items-center bg-cover">
                        <img src="../\src\assets\webp-images\3bfeb3de-557b-40e1-af9d-da7e24a58d61_clos-des-sens-septembre-2021-plats-haricots3.webp" className="bg-cover" />
                    </div>
                    <div className="h-full w-1/2 bg-[#251715] flex justify-start items-center">
                        <div className="flex flex-col p-4 w-2/3">
                            <Text className="text-white font-changaOne sm:text-xl lg:text-4xl text-5xl">
                                UN MOMENT
                            </Text>
                            <Text className="text-[#F2F2F2] font-openSansLight sm:text-sm lg:text-lg text-2xl leading-10">
                                Par le prisme culinaire, entre pudeur et force vitale, le monde du vivant s’exprime jusqu’à la quintessence. Sublimé, il livre son émotion ultime
                            </Text>
                        </div>
                    </div>
                </div>
                <div className="w-full flex">
                    <div className="h-full w-1/2 bg-[#142C08] flex justify-start items-center">
                        <div className="flex flex-col p-4 w-2/3">
                            <Text className="text-white font-changaOne sm:text-xl lg:text-4xl text-5xl">
                                NOUS TROUVER
                            </Text>
                            <Text className="text-[#F2F2F2] font-openSansLight sm:text-sm lg:text-lg text-2xl leading-10">
                                Un lieu unique dans un écrin de nature.
                            </Text>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-start items-center bg-cover">
                        MAP
                    </div>
                </div>
            </div>
            <ModalFooter />
        </div>
    );
};

export default HomeView;
