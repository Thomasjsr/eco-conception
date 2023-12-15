import React, { useEffect, useState } from "react";
import { RouteProps } from "react-router-dom";
import ModalHeader from "../components/ModalHeader";
import ModalFooter from "../components/ModalFooter";
import { Typography } from 'antd';

const { Text } = Typography;

const HomeView: React.FunctionComponent<RouteProps> = () => {
    return (
        <div className="flex h-screen flex-col justify-between">
            <ModalHeader />
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
                <div className="w-full h-screen flex">
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
                    <div className="h-full w-1/2 bg-gray-500 flex items-center justify-center">MAP</div>
                </div>
            </div>
            <ModalFooter />
        </div>
    );
};

export default HomeView;
