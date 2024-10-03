import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

export default function WhatsAppChatButton() {
  const [showChat, setShowChat] = useState(false);

  const handleClick = () => {
    setShowChat(!showChat);
  };

  const whatsappNumber = "+62895396479427";

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-4 left-4 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-lg transition duration-500 hover:bg-green-600"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </button>
      {showChat && (
        <div className="fixed bottom-20 left-4 z-[9999] w-64 rounded-lg bg-white p-4 shadow-lg">
          <p className="mb-2">Hubungi kami di WhatsApp:</p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="text-green-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {whatsappNumber}
          </a>
        </div>
      )}
    </>
  );
}
