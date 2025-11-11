import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-700 text-white shadow-inner pt-10 pb-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1">
            <h1 className="font-bold text-lg mb-2">My Website</h1>
            <p className="text-gray-200 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
              error pariatur in accusantium consequatur natus esse consequuntur
              adipisci consectetur doloribus!
            </p>
          </div>

          <div className="flex-1">
            <h1 className="font-bold text-lg mb-2">About</h1>
            <p className="text-gray-200 leading-relaxed">
              Name: Thanaporn Jampathip <br />
              Nickname: Khing <br />
              For Works Master Mark
            </p>
          </div>

          <div className="flex-1">
            <h1 className="font-bold text-lg mb-2">Contact</h1>
            <p className="text-gray-200 leading-relaxed">
              Instagram: tnap_jpat <br />
              Facebook: Thanaporn Jampathip
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
