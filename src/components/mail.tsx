import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const EmailForm: React.FC = () => {
  const form = useRef();

  function initMail(): void {
    if (form) {
      emailjs.sendForm("service_pbzvivd", "template_n484sln", form.current, "fhFOm9qVTAPEkO2RY")
        .then((result) => {
          toast.success("Mail envoyé");
          console.log(result.text);
        }, (error) => {
          toast.error(error.text);
          console.log(error.text);
        });
      form.current.reset();
    }
  }
  const sendEmail = (event: { preventDefault: () => void; }): void => {
    initMail();
    event.preventDefault();
  };

  return (
    <div className="w-full h-full  md:w-1/2 flex flex-col items-center justify-center">
      <form onSubmit={sendEmail} id="my_form" ref={form} className="h-full w-full flex justify-start flex-col px-10 items-center md:py-20 text-white">
        <div className="flex w-full items-center justify-between my-4">
          <input
            className="border p-2 border-white bg-black w-[45%]"
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Nom *"
            required
          />
          <input
            className="border p-2 border-white bg-black w-[45%]"
            name="firstName"
            id="firstName"
            type="text"
            placeholder="Prénom *"
            required
          />
        </div>
        <div className="flex w-full items-center justify-between my-4">
          <input
            className="border p-2 border-white bg-black w-[45%]"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Téléphone *"
            required
          />
          <input
            className="border p-2 border-white bg-black w-[45%]"
            type="email"
            name="email"
            id="email"
            placeholder="Mail *"
            required
          />
        </div>
        <textarea
          placeholder="Votre Message *"
          name="message"
          id="message"
          required
          className="resize-none bg-black border border-white w-full h-[30%] min-h-[150px] md:min-h-[250px] my-4 p-2"
        ></textarea>
        <button type='submit' className="bg-white text-black font-bold w-[75%] h-[50px] w-full rounded-md">
          Nous contacter
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
