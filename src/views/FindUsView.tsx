import React, { useEffect, useState } from "react";
import { RouteProps } from "react-router-dom";
import ModalHeader from "../components/ModalHeader";
import ModalHeaderMobile from "../components/ModalHeaderMobile";
import ModalFooter from "../components/ModalFooter";

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
            <ModalHeader open={!open} />
            <ModalHeaderMobile open={open} />
            <div className="bg-cover bg-center min-h-screen bg-[url('./assets/webp-images/clos_des_sens_juin_2022_salle_7.webp')]">
            </div>
            <div className="flex-col min-h-screen w-full bg-black flex md:flex-row">
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center pl-10">
                    <h1 className="text-white font-bold text-4xl">Accès</h1>
                    <span className="text-white text-lg">13 rue Jean Mermoz<br/>74940 Annecy-le-Vieux, FRANCE</span>
                </div>
                <div className="w-full md:w-1/2 h-full bg-white text-black flex items-center justify-center">Map</div>
            </div>
            <div className="min-h-screen bg-black flex flex-col-reverse md:flex-row">
                <div className="w-full h-full md:h-1/2 md:w-1/2 flex flex-col items-center justify-center">
                    <form className="h-full w-full flex justify-start flex-col px-10 items-center md:py-20 text-white">
                        <div className="flex w-full items-center justify-between my-4">
                            <input className="border p-2 border-white bg-black w-[45%]" type="text" placeholder="Nom *" required></input>
                            <input className="border p-2 border-white bg-black w-[45%]" type="text" placeholder="Prénom *" required></input>
                        </div>
                        <div className="flex w-full items-center justify-between my-4">
                            <input className="border p-2 border-white bg-black w-[45%]" type="text" placeholder="Téléphone *" required></input>
                            <input className="border p-2 border-white bg-black w-[45%]" type="email" placeholder="Mail *" required></input>
                        </div>
                        <textarea placeholder="Votre Message *" required className="resize-none bg-black border border-white w-full h-[30%] min-h-[150px] md:min-h-[250px] my-4"></textarea>
                        <button className="bg-white text-black font-bold w-[75%] h-[45px] md:w-[400px] rounded-md md:h-[56px]">Nous contacter</button>
                    </form>
                </div>
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
