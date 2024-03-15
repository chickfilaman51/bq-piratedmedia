import React from "react";

const Button = () => {
  const handleClick = () => {
    window.location.href = "https://docs.google.com/document/d/142ehMW1QYaI9iWI__-AN8gHaLklV8Gl0l1Ih4bCKMs0/edit?usp=sharing";
  };

  return (
    <button type="button" className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none" onClick={handleClick}>
      Click here for the citations!
    </button>
  );
};

export default Button;
