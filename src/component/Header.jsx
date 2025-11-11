import React from "react";

function Header() {
  return (
    <div>
      <header className="bg-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
                <h1 className='text-3xl font-bold'>My website</h1>
                <p className='text-blue-100 text-sm mt-1'>Thanaporn Jampathip</p>
            </div>
            <nav>
                <ul className='flex space-x-6'>
                    <li><a href="#home" className='hover:text-blue-200 transition'>Home</a></li>
                    <li><a href="#about" className='hover:text-blue-200 transition'>About</a></li>
                    <li><a href="#contact" className='hover:text-blue-200 transition'>Contact</a></li>
                </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
