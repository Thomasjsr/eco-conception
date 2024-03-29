import React, { useEffect, useState } from "react";
import { RouteProps } from "react-router-dom";
import ModalHeader from "../components/ModalHeader";
import ModalHeaderMobile from "../components/ModalHeaderMobile";
import ModalFooter from "../components/ModalFooter";
import MapComponent from "../components/Map";
import EmailForm from "../components/mail";
import { ToastContainer } from 'react-toastify';


const FindUsView: React.FunctionComponent<RouteProps> = () => {
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
            <ToastContainer position="bottom-right" autoClose={2000} closeOnClick theme="dark"/>
            <ModalHeader open={!open} />
            <ModalHeaderMobile open={open} />
            <div className="bg-cover bg-center min-h-screen bg-[url('./assets/webp-images/clos_des_sens_juin_2022_salle_7.webp')]">
            </div>
            <div className="flex-col min-h-screen w-full bg-black flex md:flex-row">
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center pl-10">
                    <h1 className="text-white font-bold text-4xl">Accès</h1>
                    <span className="text-white text-lg">13 rue Jean Mermoz<br/>74940 Annecy-le-Vieux, FRANCE</span>
                </div>
                <div className="w-full md:w-1/2 h-full bg-white text-black flex items-center justify-center overflow-hidden">
                    <MapComponent/>
                </div>
            </div>
            <div className="min-h-screen bg-black flex flex-col-reverse md:flex-row py-10">
                <EmailForm/>
                <div className="w-full h-full md:h-1/2 md:w-1/2 flex flex-col text-white md:py-24">
                    <h1 className="text-4xl font-bold m-2 text-center md:text-start">Nous contacter</h1>
                    <span className="m-4 text-center md:text-start">Tél. : +33 (0)4 50 23 07 90</span>
                    <h1 className="text-4xl font-bold m-4 text-center md:text-start">Services</h1>
                    <div className="w-full h-full flex m-2 text-center justify-evenly sm:justify-center md:justify-start md:text-start">
                        <div className="w-1/4 h-full flex flex-col items-start">
                            <span className="">Mardi</span>
                            <span className="">Mercredi</span>
                            <span className="">Jeudi</span>
                            <span className="">Vendredi</span>
                            <span className="">Samedi</span>
                            <span className="">Dimanche</span>
                        </div>
                        <div className="w-3/2 h-full flex flex-col items-start">
                            <span className="">soir</span>
                            <span className="">midi & soir</span>
                            <span className="">midi & soir</span>
                            <span className="">midi & soir</span>
                            <span className="">midi & soir</span>
                            <span className="">soir</span>
                        </div>
                    </div>
                </div>
            </div>
            <ModalFooter />
        </div>
    );
};

export default FindUsView;
