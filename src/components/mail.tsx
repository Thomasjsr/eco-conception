import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailForm: React.FC = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page ( a enlever )

    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Téléphone:', telephone);
    console.log('Email:', email);
    console.log('Message:', message);
    toast.success('Mail sended');

    // Ajoutez ici la logique pour envoyer l'e-mail
  };

  return (
    <div className="w-full h-full  md:w-1/2 flex flex-col items-center justify-center">
      <form className="h-full w-full flex justify-start flex-col px-10 items-center md:py-20 text-white">
        <div className="flex w-full items-center justify-between my-4">
          <input
            className="border p-2 border-white bg-black w-[45%]"
            type="text"
            placeholder="Nom *"
            required
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <input
            className="border p-2 border-white bg-black w-[45%]"
            type="text"
            placeholder="Prénom *"
            required
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
        <div className="flex w-full items-center justify-between my-4">
          <input
            className="border p-2 border-white bg-black w-[45%]"
            type="text"
            placeholder="Téléphone *"
            required
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
          <input
            className="border p-2 border-white bg-black w-[45%]"
            type="email"
            placeholder="Mail *"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          placeholder="Votre Message *"
          required
          className="resize-none bg-black border border-white w-full h-[30%] min-h-[150px] md:min-h-[250px] my-4 p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="bg-white text-black font-bold w-[75%] h-[50px] w-full rounded-md" onClick={sendEmail}>
          Nous contacter
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
