import React from 'react';
import Button from './Button';
const Navbar = () => {
  return (
    <div className="max-w-screen-xl p-3 mx-auto py-6 text-white flex items-center justify-between border-b-[1px] border-zinc-700">
      {/*LEFT SIDE*/}
      <div className="flex items-center">
        <img src="/img/63349803431f1562dccf1802_refokus logo.svg" alt="Logo" />
        <div className="flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((currentElement, index) => (
            <a href="" className="font-regular text-md flex items-center gap-1" key={index}>
              {index === 1 && (
                <span
                  style={{
                    boxShadow: "0 0 0.25em #00FF19",
                  }}
                  className="inline-block w-1.5 h-1.5 rounded-full bg-green-400"
                ></span>
              )}
              {currentElement.length === 0 ? (
                <span className="w-[2px] h-7 bg-zinc-800"></span>
              ) : (
                <span>{currentElement}</span>
              )}
            </a>
          ))}
        </div>
      </div>
      {/*RIGHT SIDE*/}
      <Button/>
    </div>
  );
};

export default Navbar;
